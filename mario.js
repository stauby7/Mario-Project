   // let element = document.getElementById("Pyradheight");
   // element.addEventListener("input", createPyramid);

  // need to get the log to clear in after each input

function createPyramid (height) {

  console.log();
  
    let rows = document.getElementById("height").value;

    let str = '';

  
  for (var i = 1; i <= rows; i++) {
     str = "";
    
    for (var j = 1; j <= (rows - i); j++) {
      str += ".";
    }
    for (var k = 1; k <= i; k++) {
      str += document.getElementById("brickstyle").value;
    }
    
    console.log(str);

     var para = document.createElement("p");

     var node = document.createTextNode(str);

     para.appendChild(node);

     var element = document.getElementById("pyramid");

     element.appendChild(para);
  }
}

createPyramid(height);
