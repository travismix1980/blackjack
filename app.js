const cards = {
	deck: [],
	suits: [ 'clubs', 'hearts', 'spades', 'diamonds' ],
	values: [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ],
	makeDeck() {
		const { values, suits, deck } = this;
		for (let value of values) {
			for (let suit of suits) {
				deck.push({ value, suit });
			}
		}
		return deck;
	}
};

const deckOfCards = {
	deck: [],
	initDeck() {
		this.deck = [];
        this.deck = [ ...cards.makeDeck() ];
	},
	shuffleDeck() {
		const { deck } = this;
		for (let i = deck.length - 1; i > 0; i--) {
			let randomPos = Math.floor(Math.random() * deck.length);
			let temp = deck[i];
			deck[i] = deck[randomPos];
			deck[randomPos] = temp;
		}
	},
	dealCard() {
		return this.deck.shift();
	}
};

deckOfCards.initDeck();
