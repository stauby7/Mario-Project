function createPyramid (height) {

    let rows = document.getElementById("height").value;

    let str = '';

  
  for (var i = 1; i <= rows; i++) {
     str = "";
    
    for (var j = 1; j <= (rows - i); j++) {
      str += ".";
    }
    for (var k = 1; k <= i; k++) {
      str += '#';
    }
    
    console.log(str);

     var para = document.createElement("p");

     var node = document.createTextNode(str);

     para.appendChild(node);

     var element = document.getElementById("pyramid");

     element.appendChild(para);
  }
}

    let element = document.getElementById("Pyradheight");
    element.addEventListener("click", createPyramid);
createPyramid(height);
