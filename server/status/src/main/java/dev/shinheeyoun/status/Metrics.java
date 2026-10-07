package dev.shinheeyoun.status;

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryUsage;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.RuntimeMXBean;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import javax.management.MBeanServer;
import javax.management.ObjectName;

/**
 * Reads the numbers shown on the site's status card, and keeps the last few minutes of them for the graphs.
 * Only counters and sizes are exposed: no host names, paths, IP addresses or settings.
 */
final class Metrics {
    /** How many samples are kept: 120 samples, one every 5 seconds, is the last 10 minutes. */
    static final int KEEP = 120;

    /** One reading of the numbers that are graphed. -1 means "not available". */
    record Sample(long time, long heapUsed, int threads, long httpBusy) {}

    private static final MBeanServer MBEANS = ManagementFactory.getPlatformMBeanServer();
    private static final ArrayDeque<Sample> HISTORY = new ArrayDeque<>();

    private Metrics() {}

    static Sample sample() {
        MemoryUsage heap = ManagementFactory.getMemoryMXBean().getHeapMemoryUsage();
        return new Sample(
                System.currentTimeMillis(),
                heap.getUsed(),
                ManagementFactory.getThreadMXBean().getThreadCount(),
                sumTomcat("ThreadPool", "currentThreadsBusy"));
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

    /** Sums an attribute over Tomcat's MBeans of one type (one per connector); -1 if Tomcat does not expose it. */
    private static long sumTomcat(String type, String attribute) {
        try {
            Set<ObjectName> names = MBEANS.queryNames(new ObjectName("Catalina:type=" + type + ",name=*"), null);
            if (names.isEmpty()) return -1;
            long total = 0;
            for (ObjectName name : names) total += ((Number) MBEANS.getAttribute(name, attribute)).longValue();
            return total;
        } catch (Exception e) {
            return -1;
        }
    }

    /** A load between 0 and 1, or null when the JVM cannot tell. */
    private static String load(double value) {
        return value < 0 || Double.isNaN(value) ? "null" : String.format("%.3f", value);
    }

    private static String number(long value) {
        return value < 0 ? "null" : Long.toString(value);
    }

    static String toJson(String serverInfo) {
        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
        MemoryUsage heap = ManagementFactory.getMemoryMXBean().getHeapMemoryUsage();
        long nonHeap = ManagementFactory.getMemoryMXBean().getNonHeapMemoryUsage().getUsed();
        var threads = ManagementFactory.getThreadMXBean();

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

        StringBuilder json = new StringBuilder(8192);
        json.append("{\"tomcat\":\"").append(escape(serverInfo)).append('"');
        json.append(",\"java\":\"").append(escape(System.getProperty("java.version", ""))).append('"');
        json.append(",\"now\":").append(System.currentTimeMillis());
        json.append(",\"startedAt\":").append(runtime.getStartTime());
        json.append(",\"uptimeMs\":").append(runtime.getUptime());
        json.append(",\"heap\":{\"used\":").append(heap.getUsed())
                .append(",\"committed\":").append(heap.getCommitted())
                .append(",\"max\":").append(number(heap.getMax())).append('}');
        json.append(",\"nonHeapUsed\":").append(nonHeap);
        json.append(",\"threads\":{\"live\":").append(threads.getThreadCount())
                .append(",\"peak\":").append(threads.getPeakThreadCount())
                .append(",\"daemon\":").append(threads.getDaemonThreadCount()).append('}');
        json.append(",\"http\":{\"threadsBusy\":").append(number(sumTomcat("ThreadPool", "currentThreadsBusy")))
                .append(",\"threadsMax\":").append(number(sumTomcat("ThreadPool", "maxThreads")))
                .append(",\"requests\":").append(number(sumTomcat("GlobalRequestProcessor", "requestCount")))
                .append(",\"errors\":").append(number(sumTomcat("GlobalRequestProcessor", "errorCount"))).append('}');
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
                    .append(",\"busy\":").append(number(sample.httpBusy())).append('}');
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
