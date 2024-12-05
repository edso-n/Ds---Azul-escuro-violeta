export class ListaDeCartas {
    constructor() {
        this.cartas = []; // Armazena as cartas
    }

    // Método para adicionar uma carta
    adicionarCarta(carta) {
        this.cartas.push(carta);
        

    // Método para remover uma carta por índice
    removerCarta(index) {
        if (index >= 0 && index < this.cartas.length) {
            const cartaRemovida = this.cartas.splice(index, 1)[0];
            return cartaRemovida;
        } else {
            return null;
        }
    }

    // Método para mostrar todas as cartas da lista
    mostrarCartas() {
        if (this.cartas.length === 0) {
            console.log("A lista de cartas está vazia.");
        } else {
            console.log("Cartas na lista:");
            this.cartas.forEach((carta, index) => {
                console.log(`${index}: ${carta.getDescription()}`);
            });
        }
    }

    // Método para obter a quantidade de cartas na lista
    contarCartas() {
        return this.cartas.length;
    }
}

