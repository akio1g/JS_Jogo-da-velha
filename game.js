let playerTurn = 1;

let matriz = [[0,0,0],[0,0,0],[0,0,0]];
function chooseBox(x) {
    if(playerTurn) {
        const button = document.getElementById(x);
        button.innerText = "X";
        allocate(x, 'X');
        playerTurn = 0;
    } else {
        const button = document.getElementById(x);
        button.innerText = "O";
        allocate(x, 'O');
        playerTurn = 1;
    }
    console.log(matriz);
}

function allocate(id, value) {
    for(let r = 0; r < 3; r++) {
        if(id.charAt(1) == r) {
            for(let c = 0; c < 3; c++) {
                if(id.charAt(4) == c) {
                    matriz[r][c] = value;
                }
            }
        }
    }
}