/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/

var row1 = 0;
var row2 = 0;
var row3 = 0;
var row4 = 0;
var row5 = 0;


for ( var i = 0; i <=36; i++) {
    var piece = document.createElement('div');            // create an empty div
    piece.setAttribute('class', 'piece');                 // assign the div class="piece"
    document.getElementById('board').appendChild(piece);  // add the div to the id="board"
    piece.style.top = '0px';                              // assign the top/y position
    piece.style.left = i * 100 + 'px';
    
    if (i >= 24) {
        piece.style.top = '400px';
        piece.style.left = row5 * 100 + 'px';
        row5++;
    }
    
    else if (i >= 18) {
        piece.style.top = '300px';
        piece.style.left = row4 * 100 + 'px';
        row4++;
    }
    
    else if (i >= 12) {
        piece.style.top = '200px';
        piece.style.left = row2 * 100 + 'px';
        row3++;
    }
    
    else if (i >= 6) {
        piece.style.top = '100px';
        piece.style.left = row2 * 100 + 'px';
        row2++;
    }
    
    
}

    