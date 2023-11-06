document.addEventListener("DOMContentLoaded", function(event) {
    var cursorImg = new Image();
    cursorImg.src = "./icons/cursor.png";
    cursorImg.style.position = "fixed";
    cursorImg.style.zIndex = "9999";
    cursorImg.style.pointerEvents = "none";
    cursorImg.style.width = "32px"; 
    cursorImg.style.height = "32px"; 
  
    document.addEventListener("mousemove", function(e) {
      var x = e.clientX;
      var y = e.clientY;
  
      cursorImg.style.left = x + "px";
      cursorImg.style.top = y + "px";
    });
  
    document.body.appendChild(cursorImg);
  });