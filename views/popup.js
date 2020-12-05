console.log('popup script executed');

var port = chrome.extension.connect({
  name: "Sample Communication"
});
port.postMessage("popup: HI BackGround");
port.onMessage.addListener(function(msg) {
  console.log("popup: message recieved - ", msg);
});

// 버튼 클릭시 
document.querySelector('.test').addEventListener('click', testRequest);
function testRequest() {        
  console.log("popup: executing button click...");
}