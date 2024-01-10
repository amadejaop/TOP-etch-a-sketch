const board = document.querySelector('#board');
let numOfSquares = 16;
let squaresArray = [];

generateSquares();

// on prompt, before anything else, take numOfSquares and remove each div, then prompt, which will change numofsquares and use the new numofsquares to uopdate the grid!

function generateSquares() {
  const squareWidth = Math.floor(960 / numOfSquares);
  for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
    // create and add div to the page, store in array
    squaresArray[i] = document.createElement('div');
    squaresArray[i].textContent = 'a';
    squaresArray[i].classList.add('square');
    squaresArray[i].style.width = squareWidth + 'px';
    board.appendChild(squaresArray[i]);
  }
}

function removeSquares() {
  if (squaresArray.length > 0) {
    for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
      board.removeChild(squaresArray[i]);
  }
  clearArray();
  }
}

function clearArray() {
  squaresArray.splice(0, (numOfSquares * numOfSquares));
  console.log("Array has " + squaresArray.length + " elements.");
}

const promptButton = document.querySelector('#promptButton');
promptButton.addEventListener('click', promptUser);

function promptUser() {
  removeSquares();
  const userChoiceSquares = parseInt(prompt('Type in the number of squares you wish to generate (1 - 100)'));
  if (userChoiceSquares > 0 && userChoiceSquares <= 100) {
    numOfSquares = userChoiceSquares;
    generateSquares();
  } else {
    // alert("Invalid input. Please enter an integer from 1 to 100!");
    promptUser();
  }
}
// generate enough divs to fill the space
// place squares inside board (container)
// add an event listener to each 
