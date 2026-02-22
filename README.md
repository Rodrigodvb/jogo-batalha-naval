🚢 Batalha Naval - JavaScript (2 Jogadores)

Um jogo clássico de Batalha Naval (Battleship) desenvolvido em JavaScript puro (Vanilla JS), utilizando módulos ES6 e manipulação de DOM.

O projeto foi estruturado com separação de responsabilidades, simulando uma arquitetura organizada em camadas.

🎮 Funcionalidades

✅ Jogo para 2 jogadores locais

✅ Posicionamento automático de navios

✅ Alternância automática de turnos

✅ Detecção de acerto (hit) e erro (miss)

✅ Verificação automática de vencedor

✅ Interface interativa via DOM

✅ Botão de reinício

🧠 Estrutura do Projeto
📁 projeto <br>
- index.html <br>
- style.css <br>
- js/ <br>
  - ship.js <br>
  - board.js <br>
  - game.js <br>
  - main.js <br>

	
🔹 ship.js

Responsável pela lógica do navio:

Controle de tamanho

Registro de danos

Verificação se foi afundado

🔹 board.js

Gerencia o tabuleiro:

Criação da grade

Posicionamento automático de navios

Recebimento de ataques

Verificação se todos os navios foram destruídos

🔹 game.js

Controla as regras da partida:

Alternância de turnos

Execução de ataques

Verificação de vencedor

🔹 main.js

Camada de interface:

Manipulação do DOM

Eventos de clique

Atualização visual do jogo

🏗️ Arquitetura Utilizada

O projeto segue uma organização semelhante ao padrão:

Model:
  Ship
  Board

Controller:
  Game

View:
  Main (DOM)

Separação clara entre:

🔹 Lógica do jogo

🔹 Regras da partida

🔹 Interface visual

⚙️ Como Executar

Clone o repositório:

git clone https://github.com/Rodrigodvb/jogo-batalha-naval
Abra o arquivo index.html no navegador.

⚠️ É necessário que o navegador suporte ES6 Modules.

🎯 Regras do Jogo

Cada jogador possui:

1 navio de tamanho 4

2 navios de tamanho 3

2 navios de tamanho 2

Os navios são posicionados automaticamente.

Jogadores alternam turnos.

Vence quem destruir todos os navios do adversário.

📸 Demonstração

(Você pode adicionar aqui um GIF ou screenshot do jogo)

🚀 Melhorias Futuras

 Posicionamento manual de navios

 Modo jogador vs IA

 Sistema de reinício sem reload da página

 Animações

 Melhor feedback visual

 Sistema de placar

🧩 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6 Modules)

Manipulação de DOM

📚 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Praticar Programação Orientada a Objetos

Entender separação de responsabilidades

Trabalhar com módulos ES6

Manipular eventos no DOM

Estruturar projetos front-end de forma organizada

👨‍💻 Autor

Rodrigo Barbosa
GitHub: https://github.com/Rodrigodvb


Adicionar badges do GitHub**

Criar versão em inglês**

Adaptar para parecer projeto de currículo**

Qual nível você quer? 🚀
