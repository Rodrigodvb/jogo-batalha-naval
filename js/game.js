// Importa a classe Board responsável por controlar o tabuleiro
import Board from "./board.js";

// Classe principal que controla a partida
export default class Game {

    // O constructor é executado quando criamos um novo Game()
    constructor() {

        // Cria o tabuleiro do Jogador 1
        this.player1 = new Board();

        // Cria o tabuleiro do Jogador 2
        this.player2 = new Board();

        // Define qual jogador começa (1 começa por padrão)
        this.currentPlayer = 1;

        // Posiciona os navios automaticamente no início do jogo
        this.setupShips();
    }

    // Método responsável por posicionar os navios nos dois tabuleiros
    setupShips() {

        // Define os tamanhos dos navios da partida
        // 1 navio de tamanho 4
        // 2 navios de tamanho 3
        // 2 navios de tamanho 2
        const shipSizes = [4, 3, 3, 2, 2];

        // Para cada tamanho de navio, posiciona um no tabuleiro de cada jogador
        shipSizes.forEach(size => {
            this.player1.placeShip(size);
            this.player2.placeShip(size);
        });
    }

    // Método chamado quando um jogador tenta atacar uma posição
    attack(index) {

        // Determina quem é o oponente com base no jogador atual
        const opponent = this.currentPlayer === 1 
            ? this.player2 
            : this.player1;

        // Envia o ataque para o tabuleiro do oponente
        const result = opponent.receiveAttack(index);

        // Se houve resultado válido (hit ou miss),
        // alterna o turno para o outro jogador
        if (result) {
            this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }

        // Retorna o resultado do ataque:
        // "hit", "miss" ou null (caso já tenha sido atacado antes)
        return result;
    }

    // Verifica se algum jogador venceu a partida
    checkWinner() {

        // Se todos os navios do Jogador 1 afundaram,
        // então o Jogador 2 venceu
        if (this.player1.allShipsSunk()) return 2;

        // Se todos os navios do Jogador 2 afundaram,
        // então o Jogador 1 venceu
        if (this.player2.allShipsSunk()) return 1;

        // Se ninguém venceu ainda, retorna null
        return null;
    }
}