// Classe que representa um navio do jogo
export default class Ship {

    // O constructor é chamado quando criamos um novo Ship
    constructor(size) {

        // Define o tamanho do navio
        // Exemplo: size = 3 significa que ocupa 3 posições no tabuleiro
        this.size = size;

        // Guarda quantas vezes o navio já foi atingido
        // Começa em 0 porque ainda não sofreu nenhum ataque
        this.hits = 0;
    }

    // Método chamado quando o navio é atingido
    hit() {

        // Incrementa o número de acertos recebidos
        this.hits++;
    }

    // Verifica se o navio foi completamente destruído
    isSunk() {

        // Retorna true se o número de acertos
        // for maior ou igual ao tamanho do navio
        return this.hits >= this.size;
    }
}