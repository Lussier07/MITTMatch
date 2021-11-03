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

const restartGame = () => {
  
  // cards.classList.remove('show', 'matched')
};



const gameArea = document.querySelector('#cards');

const revealCards = (e) => {
  e.target.classList.add('show');
};

gameArea.addEventListener('click', revealCards)



const cards = document.querySelectorAll('.card');
console.log(cards);

console.log(shuffle(cards));

restartGame();
