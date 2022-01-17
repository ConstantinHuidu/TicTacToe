var gameCells = [];
var gameOver = false;
var playerName = 'X';

function startGame() {
    document.getElementById('startbtn').disabled = true;
    document.getElementById('turn').innerHTML = "Next turn: Player X";
    for (var i = 0; i < 9; ++i) {
        document.getElementById('grid').innerHTML += `<div id="` + i + `" class="cells" onclick="return clickCell(this);"></div>`;
    }
}

function changePlayer() {
    if (playerName === 'X') {
            playerName = '0';
    } else {
        playerName = 'X';
    }
}

function clickCell(cell) {
    var id = cell.id;
    if (!gameCells[id] && gameOver === false) {
        gameCells[id] = playerName;
        cell.innerHTML = playerName;
        if (playerName === 'X') {
            cell.style.color = "green";
        } else {
            cell.style.color = "red";
        }
        gameWon();
        changePlayer();
        document.getElementById('turn').innerText = "Next turn: Player " + playerName;
        gameDraw();
    }
}

function gameDraw() {
    var draw = 0;
    for (var i = 0; i < 9; ++i) {
        if(gameCells[i]) {
            ++draw;
        }
    }
    if (draw === 9 && gameOver === false) {
        document.getElementById('announceResult').innerHTML = "Draw";
    }
}

let allCombinations = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [4, 1, 7], [4, 3, 5], [4, 6, 2], [6, 7, 8], [2, 5, 8]];

function gameWon() {
    for (var i = 0; i < allCombinations.length; ++i) {
        var combination = allCombinations[i];
        var id1 = combination[0];
        var id2 = combination[1];
        var id3 = combination[2];
        if(gameCells[id1] === playerName && gameCells[id2] === playerName && gameCells[id3] === playerName) {
            document.getElementById('announceResult').innerHTML = "Player " + playerName + " wins";
            gameOver = true;
            document.getElementById(id1).style.backgroundColor = "yellow";
            document.getElementById(id2).style.backgroundColor = "yellow";
            document.getElementById(id3).style.backgroundColor = "yellow";
        }
    }
}



