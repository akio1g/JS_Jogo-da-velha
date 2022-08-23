function startGame() {
    let option = document.querySelector('input[name="game-option"]:checked');
    let dataGame = [option.value];
    if(option.value === 'one-player'){
        dataGame.push(document.getElementById('name-player-one').value);
    } else {
        dataGame.push(document.getElementById('name-player-one').value,document.getElementById('name-player-two').value);
    }

    sessionStorage.setItem("game-info", dataGame);
    const url = window.location.href.replace("menu.html", "game.html");
    window.location.href = url;
}


function showDisplay(number) {
    if(number === 1) {
        const label = document.getElementById("player-two");
        label.style.display="none";
    }
    else {
        const label = document.getElementById("player-two");
        label.style.display="flex";
    }
}