class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards() {
    console.log(this.cards);
    // ... write your code here
    if(!this.cards){
      return undefined;
    }
    let newCards = [];
    for(let i = 0; i < this.cards.length; i++){
      const randomIndex = Math.floor(Math.random() * this.cards.length);
        if(!newCards.includes(this.cards[randomIndex])){
          newCards.push(this.cards[randomIndex]);
        }      
    } 
       this.cards = newCards;
  }

  // shuffleCards(){
  //   if(!this.cards){
  //         return undefined;
  //       }
  // const shuffledArray = this.cards.sort((a, b) => 0.5 - Math.random());
  //   return shuffledArray;
  // }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if(card1 == card2){
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }


  checkIfFinished() {
    console.log(this.pairsGuessed);
    // ... write your code here
    if(this.pairsGuessed == 12){
      return true;
    } else {
      return false;
    }
    
  }
}


