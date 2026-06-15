# 🏰 Dungeon of Choices

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)]()
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)]()
[![License](https://img.shields.io/badge/License-MIT-blue)]()

Um jogo de aventura baseado em texto onde suas escolhas determinam o destino do seu personagem. Escolha entre **Mago**, **Guerreiro** ou **Arqueiro** e explore uma antiga masmorra repleta de tesouros, monstros, armadilhas e mistérios.

---

## 📖 Sobre o Jogo

Você se encontra diante da entrada de uma antiga dungeon. O cheiro de mofo e a umidade dominam o ambiente. À sua frente surgem três caminhos possíveis, representados por três classes distintas:

* 🧙‍♂️ Mago
* ⚔️ Guerreiro
* 🏹 Arqueiro

Cada classe possui encontros, desafios e oportunidades diferentes. Algumas escolhas levam à riqueza e à glória. Outras levam a armadilhas mortais.

O destino da aventura está completamente em suas mãos.

---

## ✨ Características

* 🧙‍♂️ 3 classes jogáveis
* 📜 56 páginas/eventos únicos
* ⚔️ Sistema de escolhas ramificadas
* 👑 Chefe final opcional: Rei Amaldiçoado
* ☠️ Diversos finais de derrota
* 🏆 Múltiplos finais de vitória
* 📖 Narrativa totalmente em português
* 📂 Estrutura baseada em JSON
* 🌐 Executado diretamente no navegador

---

## 🎮 Classes Disponíveis

### 🧙‍♂️ Mago

Utiliza magia para enfrentar os desafios da dungeon.

Possíveis encontros:

* Goblins
* Golem de Pedra
* Artefatos mágicos
* Tesouros escondidos
* Altar antigo

---

### ⚔️ Guerreiro

Enfrenta os perigos utilizando força e coragem.

Possíveis encontros:

* Espectro
* Guardião da Dungeon
* Rei Amaldiçoado
* Artefatos lendários
* Batalha final

---

### 🏹 Arqueiro

Utiliza furtividade e precisão para sobreviver.

Possíveis encontros:

* Rato Gigante
* Reunião de Goblins
* Chave mágica
* Aldeia ameaçada
* Missões heroicas

---

## 🗺️ Principais Caminhos

```text
Início
│
├── Mago
│   ├── Goblins
│   │   ├── Combate
│   │   └── Negociação
│   │
│   └── Golem de Pedra
│       ├── Luta
│       └── Persuasão
│
├── Guerreiro
│   ├── Espectro
│   │
│   └── Guardião
│       └── Rei Amaldiçoado
│           ├── Vitória
│           └── Derrota
│
└── Arqueiro
    ├── Rato Gigante
    │
    └── Goblins
        ├── Combate
        └── Aldeia
```

---

## 👑 O Rei Amaldiçoado

O maior desafio do jogo.

Durante a campanha do Guerreiro é possível descobrir a história de um antigo rei que recebeu a imortalidade como maldição.

Após séculos preso na dungeon, ele enlouqueceu e passou a utilizar magia sombria.

O jogador pode:

* Investigar sua prisão
* Descobrir seu segredo
* Enfrentá-lo em combate
* Libertar a dungeon da maldição

Ou morrer tentando.

---

## 🚀 Como Executar

### Pré-requisitos

* Node.js 18 ou superior

Verifique a instalação:

```bash
node --version
npm --version
```

---

### Clonando o Repositório

```bash
git clone https://github.com/Paulouuul/dungeonOfChoices
cd dungeonOfChoices
```

---

### Instalando Dependências

```bash
npm install
```

---

### Executando o Projeto

```bash
node server.js
```

---

### Abrindo o Jogo

Abra seu navegador e acesse:

```text
http://localhost:3000
```

---

## 📂 Estrutura do Projeto

```text
dungeonOfChoices/
│
├── public/
│   ├── background.jpeg
│   ├── button-bg.png
│   ├── dungeon_data.json
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📁 Arquivos Principais

### index.html

Responsável pela interface principal do jogo.

---

### script.js

Contém toda a lógica de:

* Navegação
* Escolhas
* Carregamento do JSON
* Atualização da interface

---

### style.css

Define:

* Layout
* Tipografia
* Cores
* Responsividade

---

### dungeon_data.json

Contém toda a narrativa do jogo.

Inclui:

* Eventos
* Histórias
* Escolhas
* Finais
* Conexões entre páginas

---

### server.js

Servidor HTTP utilizado para disponibilizar o jogo no navegador.

---

## 📖 Estrutura dos Dados

Exemplo simplificado:

```json
{
  "title": "Dungeon of Choices",
  "startPage": {
    "id": 1,
    "narrative": "Texto da história...",
    "options": [
      {
        "choice": "Escolha",
        "nextPage": 2
      }
    ]
  }
}
```

Cada página possui:

* Texto narrativo
* Lista de escolhas
* Página seguinte

---

## 🎯 Possíveis Finais

### Vitórias

* Derrotar o Rei Amaldiçoado
* Tornar-se uma lenda
* Tornar-se herói local
* Obter tesouros lendários
* Salvar aldeões

### Derrotas

* Morrer para goblins
* Cair em armadilhas
* Ser empalado
* Ser decapitado
* Ser derrotado pelo Rei Amaldiçoado

### Finais Neutros

* Abandonar a dungeon
* Recusar missões
* Voltar para casa em segurança

---

## 🎨 Personalização

### Adicionar Novas Histórias

Edite:

```text
public/dungeon_data.json
```

---

### Alterar o Visual

Edite:

```text
public/style.css
```

---

### Criar Novas Mecânicas

Edite:

```text
public/script.js
```

---

## 🐛 Solução de Problemas

### O jogo não abre

Verifique se:

* Node.js está instalado
* O servidor está executando
* A porta não está ocupada

---

### O JSON não carrega

Verifique:

* Se o arquivo existe
* Se o JSON está válido
* Se não existem vírgulas extras

---

### CSS não é aplicado

Confira:

* Caminhos dos arquivos
* Nome correto do arquivo
* Console do navegador (F12)

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript ES6

### Backend

* Node.js

### Dados

* JSON

### Servidor

* HTTP Nativo do Node.js

---

## 📊 Estatísticas do Projeto

| Informação          | Valor      |
| ------------------- | ---------- |
| Classes Jogáveis    | 3          |
| Páginas/Eventos     | 56         |
| Linguagem Principal | JavaScript |
| Narrativa           | Português  |
| Estrutura de Dados  | JSON       |
| Servidor            | Node.js    |

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

Você pode utilizar, modificar e distribuir livremente.

---

## 👨‍💻 Autor

**Paulo Ricardo Tebet Lyrio**

* GitHub: https://github.com/Paulouuul
* LinkedIn: https://www.linkedin.com/in/paulo-ricardo-tebet-lyrio-8258b619b

---

⭐ Se este projeto foi útil para você, considere deixar uma estrela no repositório.

**Boa sorte explorando a Dungeon of Choices!** 🏰⚔️✨
