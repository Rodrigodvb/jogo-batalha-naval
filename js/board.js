// Importa a classe Ship, responsável por representar cada navio
import Ship from "./ship.js";

// Classe que representa o tabuleiro do jogador
export default class Board {

    // O constructor cria um novo tabuleiro
    constructor(size = 10){

        // Define o tamanho do tabuleiro (10x10 por padrão)
        this.size = size;

        // Cria um array que representa todas as posições do tabuleiro
        // Ex: 10x10 = 100 posições
        // Inicialmente todas começam como null (vazio)
        this.grid = new Array(size * size).fill(null);

        // Array que armazenará todos os navios posicionados no tabuleiro
        this.ships = [];
    }

    // Método responsável por posicionar um navio no tabuleiro
    placeShip(shipSize) {

        // Controla se o navio foi posicionado com sucesso
        let placed = false;

        // Continua tentando até conseguir posicionar corretamente
        while (!placed) {

            // Escolhe uma posição inicial aleatória
            const start = Math.floor(Math.random() * (this.size * this.size));

            // Define a direção:
            // 1 = horizontal
            // this.size = vertical
            const direction = Math.random() < 0.5 ? 1 : this.size;

            // Cria o objeto Ship
            const ship = new Ship(shipSize);

            // Guarda as posições temporárias onde o navio poderá ser colocado
            const positions = [];

            // Loop para calcular todas as posições que o navio ocupará
            for (let i = 0; i < shipSize; i++) {

                // Calcula cada parte do navio com base na posição inicial
                const position = start + (i * direction);

                // Verifica se ultrapassa o limite do tabuleiro
                if (position >= this.size * this.size) {
                    positions.length = 0; // limpa posições
                    break;
                }

                // Se for horizontal, verifica se não "quebrou" para a próxima linha
                if (
                    direction === 1 &&
                    Math.floor(position / this.size) !== Math.floor(start / this.size)
                ) {
                    positions.length = 0;
                    break;
                }

                // Verifica se já existe algo nessa posição
                if (this.grid[position] !== null) {
                    positions.length = 0;
                    break;
                }

                // Se passou em todas as verificações, adiciona posição válida
                positions.push(position);
            }

            // Se o número de posições válidas for igual ao tamanho do navio,
            // significa que podemos posicioná-lo
            if (positions.length === shipSize) {

                // Marca cada posição do grid com referência ao navio
                positions.forEach(pos => {
                    this.grid[pos] = ship;
                });

                // Guarda o navio na lista de navios do tabuleiro
                this.ships.push(ship);

                // Marca como posicionado para sair do loop
                placed = true;
            }
        }
    }

    // Método chamado quando o jogador ataca uma posição
    receiveAttack(index) {

        // Pega o conteúdo da posição atacada
        const target = this.grid[index];

        // Se já foi atacado antes, não faz nada
        if (target == "miss" || target === "hit") {
            return null;
        }

        // Se houver um navio na posição
        if (target instanceof Ship) {

            // Registra o acerto no navio
            target.hit();

            // Marca a posição como "hit"
            this.grid[index] = "hit";

            return "hit";

        } else {

            // Se não havia navio, marca como "miss"
            this.grid[index] = "miss";

            return "miss";
        }
    }

    // Verifica se todos os navios do tabuleiro foram afundados
    allShipsSunk() {

        // Retorna true se TODOS os navios estiverem afundados
        return this.ships.every(ship => ship.isSunk());
    }
}