# Protective Metrics Beacon

An easy to install and unobtrusive web beacon that calls the [Protective Metrics](https://protectivemetrics.com) API and logs impressions for a piece of web content.

## Installation

Just drop this JavaScript tag on the page.

```
<script>
  const protectiveMetricsClient = "example"
</script>
<script src="https://beacon.protectivemetrics.com/beacon.js" async></script>
```

## Visibility Change Event

In the future we might want to send an impression when the user stops looking at the page. The following code will send the request when the page is hidden by the user navigating to a new page, switching tabs, closing the tab, minimizing the browser, or closing the browser, or, on mobile, switching from the browser to a different app.

Logging at this time would allow for the addition of page view time. How long the user viewed the page.

```
var privateMetricsData = JSON.stringify({
    url: window.location.href
});
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("https://collector.protectivemetrics.com?rand=" + Math.random(), privateMetricsData);
  }
});
```
