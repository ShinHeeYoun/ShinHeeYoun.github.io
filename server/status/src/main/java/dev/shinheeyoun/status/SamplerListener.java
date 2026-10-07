package dev.shinheeyoun.status;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/** Takes a reading every 5 seconds while the app is deployed, and stops when it is undeployed. */
public final class SamplerListener implements ServletContextListener {
    private static final int SAMPLE_SECONDS = 5;

    private ScheduledExecutorService executor;

    @Override
    public void contextInitialized(ServletContextEvent event) {
        executor = Executors.newSingleThreadScheduledExecutor(task -> {
            Thread thread = new Thread(task, "status-sampler");
            thread.setDaemon(true);
            return thread;
        });
        executor.scheduleAtFixedRate(Metrics::record, 0, SAMPLE_SECONDS, TimeUnit.SECONDS);
    }

    // Without this the thread would outlive the app after a redeploy: a classic Tomcat leak.
    @Override
    public void contextDestroyed(ServletContextEvent event) {
        if (executor != null) executor.shutdownNow();
    }
}
