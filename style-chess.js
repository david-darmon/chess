let board;
let wrapper;
let files = ['1','2','3','4','5','6','7','8'];
let ranks = ['H','G','F','E','D','C','B','A'];

function buildBoard(){
    board.innerHTML = '';
    for(let r=0; r<8; r++){
        for(let f=0; f<8; f++){
            board.appendChild(createSquare(f, r));
        }
    }
}

function createSquare(fileIndex, rankIndex){
    const sq = document.createElement('div');
    sq.classList.add('square');
    if((fileIndex + rankIndex) % 2 === 0) sq.classList.add('light');
    else sq.classList.add('dark');

    const coord = document.createElement('span');
    coord.className = 'coord';
    coord.textContent = files[fileIndex] + ranks[rankIndex];
    sq.appendChild(coord);

    sq.addEventListener('click', () => {
        if(window.onSquareClick) window.onSquareClick(fileIndex, rankIndex, sq);
    });

    return sq;
}

function updateTransform(perspInput, rxInput, ryInput, perspVal, rxVal, ryVal){
    const px = parseInt(rxInput.value,10);
    const py = parseInt(ryInput.value,10);
    board.style.transform = `rotateX(${px}deg) rotateY(${py}deg)`;
    wrapper.style.perspective = `${perspInput.value}px`;
    perspVal.textContent = perspInput.value;
    rxVal.textContent = rxInput.value;
    ryVal.textContent = ryInput.value;
}

function main(){
    board = document.getElementById('board');
    wrapper = document.getElementById('boardWrapper');
    const persp = document.getElementById('persp');
    const rx = document.getElementById('rx');
    const ry = document.getElementById('ry');
    const resetBtn = document.getElementById('reset');
    const perspVal = document.getElementById('perspVal');
    const rxVal = document.getElementById('rxVal');
    const ryVal = document.getElementById('ryVal');

    buildBoard();
    updateTransform(persp, rx, ry, perspVal, rxVal, ryVal);

    persp.addEventListener('input', () => updateTransform(persp, rx, ry, perspVal, rxVal, ryVal));
    rx.addEventListener('input', () => updateTransform(persp, rx, ry, perspVal, rxVal, ryVal));
    ry.addEventListener('input', () => updateTransform(persp, rx, ry, perspVal, rxVal, ryVal));

    resetBtn.addEventListener('click', () => {
        persp.value = 800;
        rx.value = 30;
        ry.value = 0;
        updateTransform(persp, rx, ry, perspVal, rxVal, ryVal);
    });
}

window.addEventListener('DOMContentLoaded', main);
