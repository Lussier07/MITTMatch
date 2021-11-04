// Shuffle function from http://stackoverflow.com/a/2450976
let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const restartButton = document.querySelector('.restart');
const gameArea = document.querySelector('#cards');
const cards = document.querySelectorAll('.card');
// const cardArr = Array.from(cards);


const restartGame = () => {
  const cardArr = [];
  for (const card of cards) {
    card.classList.remove('show', 'matched');
    cardArr.push(card);
    console.log(card)
  }
  shuffle(cardArr);
  // cards.classList.remove('show', 'matched')
};




const revealCards = (e) => {
  e.target.classList.add('show');
};

gameArea.addEventListener('click', revealCards)
restartButton.addEventListener('click', restartGame);


console.log(cards);

// console.log(shuffle(cards));

restartGame();
