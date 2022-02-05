let height = window.prompt("How tall is your pyramid?")
function createPyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ".";
    }
    for (var k = 1; k <= i; k++) {
      row += '#';
    }

     var para = document.createElement("p");

     var node = document.createTextNode(row);

     para.appendChild(node);

     var element = document.getElementById("pyramid");

     element.appendChild(para);
  }
}
createPyramid(height);
