let height = window.prompt("How tall is your pyramid?")
function createPyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
     console.log(row);
  }
}
createPyramid(height);
