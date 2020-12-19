import './popup.scss'; 
console.log('popup script executed'); 

// 버튼 클릭시 
document.querySelector('.test').addEventListener('click', testRequest);
function testRequest() {    
  console.log("popup: executing button click...");
} 