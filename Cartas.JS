export class Cards {
    constructor(color) {
      this.color = color;
    }
  
    getDescription() {
      return `Cor da carta: ${this.color}`;
    }
  }
  
  export class NumberCard extends Cards {
    constructor(color, number) {
      super(color);
      this.number = number;
    }
  
    getDescription() {
      return `Carta de cor: ${this.color}, e de número: ${this.number}`;
    }
  }
  
  export class Deck {
    constructor() {
      this.cards = [];
    }
  
    addCard(card) {
      this.cards.push(card);
    }
  
    // Embaralhar
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    // Retirar última carta
    drawCard() {
      return this.cards.pop();
    }
  
    // Reiniciar baralho
    resetDeck() {
      this.cards = [];
      const colors = ["Vermelho", "Azul", "Verde", "Amarelo"];
      for (let color of colors) {
        for (let number = 0; number <= 9; number++) {
          this.addCard(new NumberCard(color, number));
        }
      }
    }
  
    countCards() {
      return this.cards.length;
    }
  
    getDeckDescription() {
      return this.cards.map((card) => card.getDescription()).join("\n");
    }
  }
  
  /* Exemplo de uso
  const deck = new Deck();
  deck.resetDeck();
  console.log("Baralho inicial:");
  console.log(deck.getDeckDescription());
  
  console.log("\nNúmero de cartas no baralho:", deck.countCards());
  
  deck.shuffle();
  console.log("\nBaralho embaralhado:");
  console.log(deck.getDeckDescription());
  
  const drawnCard = deck.drawCard();
  console.log("\nCarta retirada:", drawnCard.getDescription());
  
  console.log("\nNúmero de cartas restantes no baralho:", deck.countCards());*/
  