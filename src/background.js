console.log("background: script executed");
chrome.runtime.onInstalled.addListener(function(details) {
  console.log("background: script onInstalled event:", details);
});

