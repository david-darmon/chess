let selectedSquare = null;

window.onSquareClick = function(fileIndex, rankIndex, squareElement){
    if(selectedSquare){
        selectedSquare.style.transform = '';
        selectedSquare.style.border = '';
    }

    squareElement.style.transform = 'scale(1.2)';
    squareElement.style.border = '2px solid yellow';
    selectedSquare = squareElement;
};
