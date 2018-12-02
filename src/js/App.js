import React, { Component } from 'react';
import Card from './Card';

import '../css/app.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      cards: this.generateCards(),
      selectedCard: null
    }

    this.resetGame = this.resetGame.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.dealOneCard = this.dealOneCard.bind(this);
    this.pickCard = this.pickCard.bind(this);
  }

  generateCards() {
    const cards = [];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['hearts','spades','clubs','diamonds'];

    suits.forEach(suit => {
      values.forEach(value => {
        cards.push( {value, suit} );
      });
    });

    return cards;
  }

  resetGame() {
    this.setState({ 
      cards: this.generateCards(),
      selectedCard: null
    });
  }

  shuffle() {
    const cards = this.state.cards;

    for (let i = cards.length - 1; i > 0; i--) {
      // Pick a remaining element
      const j = Math.floor(Math.random() * (i + 1));
      // Swap it with the current element
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

	  this.setState(cards);
  }

  dealOneCard() {
    const cards = this.state.cards;
    return cards[Math.floor(Math.random() * cards.length)];
  }

  pickCard() {
    const card = this.dealOneCard();
    // remove the selected card
    const cardList = this.state.cards.filter(elm => !(elm.value === card.value && elm.suit === card.suit));
    this.setState({
      cards: cardList, 
      selectedCard: card
    });
  }

  render() {
    return (
      <div className="app">
        <aside>
          <h1>Deck of cards</h1>
          <button id="new" type="button" onClick={this.resetGame}>New game</button>
          <button id="shuffle" type="button" onClick={this.shuffle}>Shuffle</button>
          <button id="pick" type="button" onClick={this.pickCard}>Pick a card</button>
          { this.state.selectedCard && <Card value={this.state.selectedCard.value} suit={this.state.selectedCard.suit} key={this.state.selectedCard} /> }
        </aside>

        <div className="cards">
          {
            this.state.cards.map((card, index) =>
              <Card
                value={card.value}
                suit={card.suit}
                key={`${card.value}_${card.suit}`}
              />
            )
          }
        </div>
      </div>
    );
  }
}