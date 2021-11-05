const restartButton = document.querySelector('.restart');
const gameArea = document.querySelector('#cards');
const cardList = document.querySelectorAll('.card');
const cardHolder = document.getElementById('cards');
const cardSymbol = cardHolder.querySelectorAll('i.fas:not(.fa-redo');
const nextCard = document.getElementById('next-card');
const score = document.getElementById('score');
const nextCardSymbol = [];
let matchedCards = [];

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

const newCardList = () => {
  cardSymbol.forEach(e => {
    nextCardSymbol.push(e);
  });
}

const cardShuffle = () => {
  const cardArr = [];
  cardList.forEach(e => {
    cardArr.push(e);
  });
  shuffle(cardArr);
  for (const card of cardArr) {
    cardHolder.appendChild(card);
  }
};

const checkMatch = (cardFlipped) => {
  if (cardFlipped.firstElementChild.className === nextCard.firstElementChild.className) {
    cardFlipped.classList.add('matched');
    matchedCards.push(cardFlipped);
    nextCardSymbol.shift();
  }
  checkWin();
  nextCard.innerHTML = `<i class="${nextCardSymbol[0].classList}"></i>`
};

const restartGame = () => {
  newCardList();
  nextCard.innerHTML = `<i class="${nextCardSymbol[0].classList}"></i>`
  clearClasses();
  score.innerText = '0';
  cardShuffle();
  matchedCards = [];
};

const clearClasses = () => {
  for (const card of cardList) {
    card.classList.remove('show', 'matched');
  }
}

const revealCards = (e) => {
  const flippedCard = e.target;
  if (flippedCard.firstElementChild.className !== 'card') {
    if (flippedCard.classList !== 'matched') {
      checkMatch(flippedCard);
      score.innerText++;
      setTimeout(() => {
        flippedCard.classList.remove('show');
      }, 1000);
    }
  }
  flippedCard.classList.add('show');
};

const checkWin = () => {
  if (matchedCards.length === 12) {
    setTimeout(() => {
      alert('You Win!')
    }, 100);
  }
};

cardHolder.addEventListener('click', revealCards)
restartButton.addEventListener('click', restartGame);