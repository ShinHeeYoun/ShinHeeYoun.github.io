package dev.shinheeyoun.status;

import java.io.File;
import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryPoolMXBean;
import java.lang.management.MemoryUsage;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.RuntimeMXBean;
import java.lang.management.ThreadInfo;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import javax.management.MBeanServer;
import javax.management.ObjectName;

/**
 * Reads the numbers shown on the site's status card, and keeps the last few minutes of them for the graphs.
 * Only counters and sizes are exposed: no host names, paths, IP addresses, application names or settings.
 */
final class Metrics {
    /** How many samples are kept: 120 samples, one every 5 seconds, is the last 10 minutes. */
    static final int KEEP = 120;

    /** One reading of the numbers that are graphed. A negative number means "not available". */
    record Sample(long time, long heapUsed, int threads, long httpBusy, double cpu, long requests, long memUsed) {}

    /** Memory of the whole machine, in bytes; -1 means "not available". */
    record Memory(long total, long available, long swapTotal, long swapFree) {}

    private static final MBeanServer MBEANS = ManagementFactory.getPlatformMBeanServer();
    private static final ArrayDeque<Sample> HISTORY = new ArrayDeque<>();

    private Metrics() {}

    static Sample sample() {
        MemoryUsage heap = ManagementFactory.getMemoryMXBean().getHeapMemoryUsage();
        Memory memory = memory();
        return new Sample(
                System.currentTimeMillis(),
                heap.getUsed(),
                ManagementFactory.getThreadMXBean().getThreadCount(),
                sumTomcat("ThreadPool", "currentThreadsBusy"),
                systemCpu(),
                sumTomcat("GlobalRequestProcessor", "requestCount"),
                memory.total() < 0 || memory.available() < 0 ? -1 : memory.total() - memory.available());
    }

    /** Called by the sampler thread. Never throws, or the scheduler would stop calling it. */
    static void record() {
        try {
            Sample sample = sample();
            synchronized (HISTORY) {
                if (HISTORY.size() >= KEEP) HISTORY.removeFirst();
                HISTORY.addLast(sample);
            }
        } catch (RuntimeException e) {
            // skip this reading
        }
    }

    private static List<Sample> history() {
        synchronized (HISTORY) {
            return new ArrayList<>(HISTORY);
        }
    }

    private static double systemCpu() {
        return ManagementFactory.getOperatingSystemMXBean() instanceof com.sun.management.OperatingSystemMXBean hotspot
                ? hotspot.getCpuLoad()
                : -1;
    }

    /**
     * Memory of the whole machine. On Linux /proc/meminfo is read, because "available" there counts the cache that
     * the system gives back when needed; the JVM's own "free" figure does not, and would look alarmingly low.
     */
    static Memory memory() {
        try {
            Map<String, Long> bytes = new HashMap<>();
            for (String line : Files.readAllLines(Path.of("/proc/meminfo"), StandardCharsets.UTF_8)) {
                int colon = line.indexOf(':');
                if (colon < 0) continue;
                String[] parts = line.substring(colon + 1).trim().split("\\s+");
                bytes.put(line.substring(0, colon), Long.parseLong(parts[0]) * 1024);
            }
            Long total = bytes.get("MemTotal");
            Long available = bytes.get("MemAvailable");
            if (total != null && available != null) {
                return new Memory(total, available, bytes.getOrDefault("SwapTotal", -1L), bytes.getOrDefault("SwapFree", -1L));
            }
        } catch (Exception e) {
            // not Linux, or not readable: the JVM's figures are used below
        }
        if (ManagementFactory.getOperatingSystemMXBean() instanceof com.sun.management.OperatingSystemMXBean hotspot) {
            return new Memory(
                    hotspot.getTotalMemorySize(),
                    hotspot.getFreeMemorySize(),
                    hotspot.getTotalSwapSpaceSize(),
                    hotspot.getFreeSwapSpaceSize());
        }
        return new Memory(-1, -1, -1, -1);
    }

    /** How long the machine has been running, or -1. */
    private static long hostUptimeMs() {
        try {
            String first = Files.readString(Path.of("/proc/uptime"), StandardCharsets.UTF_8).trim().split("\\s+")[0];
            return (long) (Double.parseDouble(first) * 1000);
        } catch (Exception e) {
            return -1;
        }
    }

    /** Sums an attribute over Tomcat's MBeans of one type (one per connector); -1 if Tomcat does not expose it. */
    private static long sumTomcat(String type, String attribute) {
        return aggregate("Catalina:type=" + type + ",name=*", attribute, false);
    }

    private static long maxTomcat(String type, String attribute) {
        return aggregate("Catalina:type=" + type + ",name=*", attribute, true);
    }

    /** Only the total over all web applications is read: their names never leave this class. */
    private static long totalSessions() {
        return aggregate("Catalina:type=Manager,host=*,context=*", "activeSessions", false);
    }

    private static long aggregate(String pattern, String attribute, boolean max) {
        try {
            Set<ObjectName> names = MBEANS.queryNames(new ObjectName(pattern), null);
            if (names.isEmpty()) return -1;
            long result = 0;
            for (ObjectName name : names) {
                long value = ((Number) MBEANS.getAttribute(name, attribute)).longValue();
                result = max ? Math.max(result, value) : result + value;
            }
            return result;
        } catch (Exception e) {
            return -1;
        }
    }

    /** The mean time Tomcat took per request, in milliseconds, or -1 before the first request. */
    private static double averageMillis() {
        long requests = sumTomcat("GlobalRequestProcessor", "requestCount");
        long total = sumTomcat("GlobalRequestProcessor", "processingTime");
        return requests <= 0 || total < 0 ? -1 : (double) total / requests;
    }

    private static long metaspaceUsed() {
        for (MemoryPoolMXBean pool : ManagementFactory.getMemoryPoolMXBeans()) {
            if ("Metaspace".equals(pool.getName())) return pool.getUsage().getUsed();
        }
        return -1;
    }

    /** How many threads are running, waiting, waiting with a timeout and blocked. Names and stacks are not read. */
    private static int[] threadStates() {
        int[] counts = new int[4];
        var bean = ManagementFactory.getThreadMXBean();
        for (ThreadInfo info : bean.getThreadInfo(bean.getAllThreadIds(), 0)) {
            if (info == null) continue; // the thread ended meanwhile
            switch (info.getThreadState()) {
                case RUNNABLE -> counts[0]++;
                case WAITING -> counts[1]++;
                case TIMED_WAITING -> counts[2]++;
                case BLOCKED -> counts[3]++;
                default -> { }
            }
        }
        return counts;
    }

    /** A load between 0 and 1, or null when the JVM cannot tell. */
    private static String load(double value) {
        return value < 0 || Double.isNaN(value) ? "null" : String.format(Locale.ROOT, "%.3f", value);
    }

    private static String decimal(double value) {
        return value < 0 || Double.isNaN(value) ? "null" : String.format(Locale.ROOT, "%.1f", value);
    }

    private static String number(long value) {
        return value < 0 ? "null" : Long.toString(value);
    }

    static String toJson(String serverInfo) {
        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
        MemoryUsage heap = ManagementFactory.getMemoryMXBean().getHeapMemoryUsage();
        long nonHeap = ManagementFactory.getMemoryMXBean().getNonHeapMemoryUsage().getUsed();
        var threads = ManagementFactory.getThreadMXBean();
        int[] states = threadStates();
        Memory memory = memory();
        File disk = new File("/");

        long gcCount = 0;
        long gcMillis = 0;
        for (GarbageCollectorMXBean gc : ManagementFactory.getGarbageCollectorMXBeans()) {
            gcCount += Math.max(0, gc.getCollectionCount());
            gcMillis += Math.max(0, gc.getCollectionTime());
        }

        OperatingSystemMXBean os = ManagementFactory.getOperatingSystemMXBean();
        double processCpu = -1;
        double systemCpu = -1;
        if (os instanceof com.sun.management.OperatingSystemMXBean hotspot) {
            processCpu = hotspot.getProcessCpuLoad();
            systemCpu = hotspot.getCpuLoad();
        }
        long openFiles = -1;
        long maxFiles = -1;
        if (os instanceof com.sun.management.UnixOperatingSystemMXBean unix) {
            openFiles = unix.getOpenFileDescriptorCount();
            maxFiles = unix.getMaxFileDescriptorCount();
        }

        StringBuilder json = new StringBuilder(16384);
        json.append("{\"tomcat\":\"").append(escape(serverInfo)).append('"');
        json.append(",\"java\":\"").append(escape(System.getProperty("java.version", ""))).append('"');
        json.append(",\"vm\":\"").append(escape(System.getProperty("java.vm.name", ""))).append('"');
        json.append(",\"vendor\":\"").append(escape(System.getProperty("java.vendor", ""))).append('"');
        json.append(",\"now\":").append(System.currentTimeMillis());
        json.append(",\"startedAt\":").append(runtime.getStartTime());
        json.append(",\"uptimeMs\":").append(runtime.getUptime());
        json.append(",\"os\":{\"name\":\"").append(escape(System.getProperty("os.name", "")))
                .append("\",\"arch\":\"").append(escape(System.getProperty("os.arch", "")))
                .append("\",\"uptimeMs\":").append(number(hostUptimeMs())).append('}');
        json.append(",\"host\":{\"memTotal\":").append(number(memory.total()))
                .append(",\"memAvailable\":").append(number(memory.available()))
                .append(",\"swapTotal\":").append(number(memory.swapTotal()))
                .append(",\"swapFree\":").append(number(memory.swapFree()))
                .append(",\"diskTotal\":").append(number(disk.getTotalSpace()))
                .append(",\"diskUsable\":").append(number(disk.getUsableSpace()))
                .append(",\"fdOpen\":").append(number(openFiles))
                .append(",\"fdMax\":").append(number(maxFiles)).append('}');
        json.append(",\"heap\":{\"used\":").append(heap.getUsed())
                .append(",\"committed\":").append(heap.getCommitted())
                .append(",\"max\":").append(number(heap.getMax())).append('}');
        json.append(",\"nonHeapUsed\":").append(nonHeap);
        json.append(",\"jvm\":{\"metaspace\":").append(number(metaspaceUsed()))
                .append(",\"classes\":").append(ManagementFactory.getClassLoadingMXBean().getLoadedClassCount())
                .append(",\"threadStates\":{\"runnable\":").append(states[0])
                .append(",\"waiting\":").append(states[1])
                .append(",\"timedWaiting\":").append(states[2])
                .append(",\"blocked\":").append(states[3]).append("}}");
        json.append(",\"threads\":{\"live\":").append(threads.getThreadCount())
                .append(",\"peak\":").append(threads.getPeakThreadCount())
                .append(",\"daemon\":").append(threads.getDaemonThreadCount()).append('}');
        json.append(",\"http\":{\"threadsBusy\":").append(number(sumTomcat("ThreadPool", "currentThreadsBusy")))
                .append(",\"threadsMax\":").append(number(sumTomcat("ThreadPool", "maxThreads")))
                .append(",\"requests\":").append(number(sumTomcat("GlobalRequestProcessor", "requestCount")))
                .append(",\"errors\":").append(number(sumTomcat("GlobalRequestProcessor", "errorCount")))
                .append(",\"avgMs\":").append(decimal(averageMillis()))
                .append(",\"maxMs\":").append(number(maxTomcat("GlobalRequestProcessor", "maxTime")))
                .append(",\"bytesIn\":").append(number(sumTomcat("GlobalRequestProcessor", "bytesReceived")))
                .append(",\"bytesOut\":").append(number(sumTomcat("GlobalRequestProcessor", "bytesSent")))
                .append(",\"connections\":").append(number(sumTomcat("ThreadPool", "connectionCount")))
                .append(",\"sessions\":").append(number(totalSessions())).append('}');
        json.append(",\"gc\":{\"count\":").append(gcCount).append(",\"millis\":").append(gcMillis).append('}');
        json.append(",\"cpu\":{\"process\":").append(load(processCpu))
                .append(",\"system\":").append(load(systemCpu))
                .append(",\"cores\":").append(os.getAvailableProcessors())
                .append(",\"loadAverage\":").append(load(os.getSystemLoadAverage())).append('}');

        json.append(",\"history\":[");
        boolean first = true;
        for (Sample sample : history()) {
            if (!first) json.append(',');
            first = false;
            json.append("{\"t\":").append(sample.time())
                    .append(",\"heap\":").append(sample.heapUsed())
                    .append(",\"threads\":").append(sample.threads())
                    .append(",\"busy\":").append(number(sample.httpBusy()))
                    .append(",\"cpu\":").append(load(sample.cpu()))
                    .append(",\"req\":").append(number(sample.requests()))
                    .append(",\"mem\":").append(number(sample.memUsed())).append('}');
        }
        json.append("]}");
        return json.toString();
    }

    private static String escape(String text) {
        StringBuilder out = new StringBuilder(text.length());
        for (char c : text.toCharArray()) {
            if (c == '"' || c == '\\') out.append('\\').append(c);
            else if (c < 0x20) out.append(' ');
            else out.append(c);
        }
        return out.toString();
    }
}
