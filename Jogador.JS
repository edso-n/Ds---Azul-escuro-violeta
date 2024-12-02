import { Deck } from "./Cartas.JS";
class player{

    constructor(name, id){
        this.id = id;
        this.name = name;
        this.hand = [];//substitiuir por uma lista de cartas depois
    }

    getPlayerId(){
        return player.id;
    }

    buyCards(Deck){
        const card = Deck.drawCard();
        if(card){
            this.hand.push(card);
            console.log(`${this.name} comprou a carta: ${card}`);
            return card;
        }else{
            console.log("Não há mais cartas no baralho!");
        }
    }

    playCard(index){
         if (index < 0 || index >= this.hand.length) {
            console.log(`${this.name} tentou jogar uma carta inválida!`);
            return null; 
    }
        const card = this.hand.splice(index, 1)[0]; 
        console.log(`${this.name} jogou a carta: ${card}`);
        return card; 
    }

    showHand() {
        console.log(`${this.name} tem as seguintes cartas: ${this.hand.join(", ")}`);
    }
}


