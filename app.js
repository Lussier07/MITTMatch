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
const cardList = document.querySelectorAll('.card');
const cardHolder = document.getElementById('cards');
const cardSymbol = cardHolder.getElementsByTagName('i');
const nextCard = document.getElementById('next-card');
const score = document.getElementById('score');
// console.log(cardSymbol)
// const cardArr = Array.from(cards);


const restartGame = () => {
  clearClasses();
  score.innerText = '0';
  // const cardArr = [];
  // let shuffled = {};
  // for (const sym of cardList) {
  // }
  // cardList.appendChild(shuffle(cards.children));
  // for (const card of cardList) {
  //   card.classList.remove('show', 'matched');
  //   cardArr.push(sym);
    // cardArr.push(card);
    // console.log(card);
  // }
  // for (const sym of cardArr) {
  //   shuffled = {li: `${sym}`}
  // }
  // console.log(cardArr);
  // cards.classList.remove('show', 'matched')
};

const clearClasses = () => {
  for (const card of cardList) {
    card.classList.remove('show', 'matched');
  }
  // const cards = cardHolder.splice();
  // console.log(shuffle(cards));

}


const revealCards = (e) => {
  const flippedCard = e.target;
  flippedCard.classList.add('show');
  score.innerText++;
  // setTimeout(e.target.classList.remove('show'), 5000);
  // if (flippedCard.classList === nextCard.firstElementChild.classList) {
  //   flippedCard.classList.add('matched')
  // }
};

gameArea.addEventListener('click', revealCards)
restartButton.addEventListener('click', restartGame);
// shuffle(cardList)

// console.log(cardList);

// console.log(shuffle(cards));

// restartGame();
