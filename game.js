/*   FALTA FUNCAO DOS BOTOES, SE O JOGO DER VELHA, JOGAR CONTRA O COMPUTADOR */

let playerTurn = 0; // jogador 1 = par // jogador 2 = impar
let dataContent = sessionStorage.getItem('game-info').split(","); // array com modo de jogo, e os nomes dos jogadores

let matriz = [[0,0,0],[0,0,0],[0,0,0]]; // tabuleiro do jogo da velha

// funcao que recebe o id do botão clicado
function chooseBox(x) {

    if(playerTurn % 2 === 0) {

        const button = document.getElementById(x); 
        button.innerText = "X"; // marca a jogada
        button.disabled = true; //desativa o botao 
        matriz[x.charAt(1)][x.charAt(4)] = 'X'; // pega linha e coluna pelo id

    } else {
        const button = document.getElementById(x);
        button.innerText = "O";
        button.disabled = true;
        matriz[x.charAt(1)][x.charAt(4)] = 'O';
    }

    // verifica se alguem ja ganhou
    if(hasAWinner()) {
        endGame(currentPlayer()); 
    } else {
        playerTurn += 1;
        showPlayerAbove(currentPlayer());
    }
}
// verifica se alguem ja ganhou
function hasAWinner() {
    if(matriz) {
        // comparando por linha
        for(let l = 0; l <= 2 ; l++) {
            if(matriz[l][0] === matriz[l][1] && matriz[l][1] === matriz[l][2]) { 
                if(matriz[l][0] !== 0) { // diferente de 0
                    return true;
                } else {
                    continue;
                }
            } else {
                continue;
            }
        }
        // comparando por coluna
        for(let c = 0; c <= 2 ; c++) {
            if(matriz[0][c] === matriz[1][c] && matriz[1][c] === matriz[2][c]) {
                if(matriz[0][c] !== 0) { // diferente de 0
                    return true;
                } else {
                    continue;
                }
            } else {
            continue;
            }
        }
        // comparando nas diagonais 1
        if(matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]){
            if(matriz[0][0] !== 0) { // diferente de 0
                return true;
            }
        }
        // comparando nas diagonais 2
        if(matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]) {
            if(matriz[0][2] !== 0) { // diferente de 0
                return true;
            }
        }

    } else { // caso não encontre nenhuma combinaçãp
        return false;
    }  
}

// função para pegar o nome do jogador atual
function currentPlayer() {
    if(playerTurn % 2 == 0) {
        return dataContent[1];
    } else {
        return dataContent[2];
    }
}
// função quando o jogo acaba
function endGame(player) {
    document.getElementById('player-round').innerHTML = 'Game Over'; // coloca um game over na tela
    document.getElementById('end-game').classList.toggle('game-over'); // mostra display game over
    document.getElementById('winner').innerHTML = player; // mostra o vencedor
    document.querySelectorAll('.game-in button').forEach((button) => button.disabled = true); // desativa botoes jogo da velha
}

function showPlayerAbove(player) {  // mostra de quem é a vez no topo da pagina
    document.getElementById('player-round').innerHTML = player;
}

