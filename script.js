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
    squaresArray[i].classList.add('square');
    squaresArray[i].style.width = squareWidth + 'px';
    squaresArray[i].addEventListener('mouseover', changeBackground);
    board.appendChild(squaresArray[i]);
  }
}

function changeBackground(e) {
  if (!e.target.style.backgroundColor) {
    e.target.style.backgroundColor = generateColor();
  } else {
    e.target.style.backgroundColor = darkenColor(e.target.style.backgroundColor);
  }
}

function generateColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return ('rgb(' + red + ', ' + green + ', ' + blue + ')');
}

function darkenColor(color) {
  let colorArray = color.split(",");  
  let red = parseInt(colorArray[0].replace("rgb(", "")) * 0.7;
  let green = parseInt(colorArray[1]) * 0.7;
  let blue = parseInt(colorArray[2].replace(")", "")) * 0.7;

  return ('rgb(' + red + ', ' + green + ', ' + blue + ')');
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
    promptUser();
  }
}
