const privateMetricsData = {
    user: protectiveMetricsClient,
    url:  window.location.href
};
navigator.sendBeacon(
    "http://collector.protectivemetrics.com", 
    JSON.stringify(privateMetricsData)
);
