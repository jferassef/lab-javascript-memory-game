class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCard = undefined;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      // return undefined
      return;
    }

    for (let i = 0; i < this.cards.length; i++) {
      const randomCardIndex = Math.floor(Math.random() * this.cards.length);
      const randomCard = this.cards[randomCardIndex];

      this.cards[randomCardIndex] = this.cards[i]; // switching one card at the position i by other random
      this.cards[i] = randomCard;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    console.log(card1);
    console.log(card2);
    if (card1 === card2) {
      // this.pairsGuessed += 1;
      this.pairsGuessed++;
      return true;
    }
    return false;
  }
  stateChange(card1, card2) {
    setTimeout(function () {
      card1.parentNode.classList.toggle('turned');
      card2.parentNode.classList.toggle('turned');
    }, 2000);
  }

  pickCard(card) {
    if (this.pickedCard == undefined) {
      this.pickedCard = card;
    } else {
      console.log(this.pickedCard);
      console.log(card);
      if (
        this.checkIfPair(
          this.pickedCard.attributes.name.value,
          card.attributes.name.value
        )
      ) {
        console.log('son pares');
        if (this.checkIfFinished()) {
          setTimeout(function () {
            alert('You won the game!');
          }, 1000);
        }
      } else {
        console.log('no son pares');

        this.stateChange(this.pickedCard, card);
        console.log(this.pickedCard.parentNode);
        console.log(card.parentNode);
      }
      this.pickedCard = undefined;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }

    return false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
