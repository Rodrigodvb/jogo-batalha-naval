// Importa a classe Game (controlador da partida)
import Game from "./game.js";

// Cria uma nova partida
let game = new Game();

// Seleciona elementos do HTML
const player1Board = document.getElementById("player1-board");
const player2Board = document.getElementById("player2-board");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");

// Função para criar tabuleiros
function createBoard(boardDiv, isPlayer1) {
    // Cria todas as células do tabuleiro (ex: 10x10 = 100)
    for (let i = 0; i < game.player1.size * game.player1.size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => {
            // Impede atadar o próprio tabuleiro
            if (
                (game.currentPlayer === 1 && isPlayer1) ||
                (game.currentPlayer === 2 && !isPlayer1)
            ){
                return;
            }
            // Executa o ataque na posição correspondente
            const result = game.attack(i);
            // Se já foi atacado antes, não faz nada
            if (!result) return;
            cell.classList.add(result);
            const winner = game.checkWinner();
            if (winner) {
                message.textContent = `🏆 Jogador ${winner} venceu!`;
            } else {
                message.textContent = `Vez do Jogador ${game.currentPlayer}`;
            }
        });
        boardDiv.appendChild(cell);
    }
}
function disableBoards() {
    document.querySelectorAll(".cell").forEach(cell => cell.style.pointerEvents = "none");
}
// Inicializa tabuleiros
createBoard(player1Board, true);
createBoard(player2Board, false);

// Reiniciar
restartButton.addEventListener("click", () => {
    location.reload();
});