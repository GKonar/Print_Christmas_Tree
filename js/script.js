var treeHeight = drawTree(2);

function drawTree(treeLevel) {
  for (var i = 0; i < treeLevel; i++) {
    var star = "";

    for (var k = 0; k < treeLevel - i; k++) {     // jak treeLevel = 3 to i = 2 
      star += " ";
    }

    for (var j = 0; j < 2 * i + 1; j++) {   // Kod do przeanalizowania 
      star += "*";
    }
    console.log(star);
  }
}
