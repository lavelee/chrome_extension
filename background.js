console.log("background: script executed");
chrome.runtime.onInstalled.addListener(function(details) {
  console.log("background: script onInstalled event:", details);
});

chrome.extension.onConnect.addListener(function(port) {
  console.log("background: Connected .....");
  port.onMessage.addListener(function(msg) {
       console.log("background: message recieved : ", msg);
       port.postMessage("this is reply from background");
  });
});

