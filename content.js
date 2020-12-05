console.log("Content script executed");

// 받는 메세지
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
      if (request.greeting == "hello")
      alert("hello background");
  }
);