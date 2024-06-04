// These are your event handlers
const clickCounterHandler = (event) => {
  // referring to the thing being selected by event listener
  const buttonClicked = event.target;
  // gets attribute of clicks for the specific element being targeted
  let clicks = parseInt(buttonClicked.getAttribute("data-clicks"))

  clicks++;

  // console.log(clicks);
  // sets attribute when clicks is updated
  buttonClicked.setAttribute("data-clicks", clicks);

  if (clicks === 1)
    buttonClicked.textContent = `I've been clicked ${clicks} time.`
  else if (clicks >= 2)
    buttonClicked.textContent = `I've been clicked ${clicks} times!`

  // console.log(buttonClicked.textContent)
};

const handleKeydown = (event) => {
  const keywordTracker = document.querySelector('#keydown-tracker');
  // grabs the key being pressed by name
  const keyPressed = event.code;
  // checks which key was pressed
  if (keyPressed === 'Enter') {
    keywordTracker.textContent = "You pressed Enter";
  }
  else if (keyPressed === 'KeyA') {
    keywordTracker.textContent = "You pressed KeyA";
  }
  else if (keyPressed === 'Space') {
    keywordTracker.textContent = "You pressed Space";
  }
  console.log(keyPressed);
  console.log(keywordTracker.textContent);
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  // generalizes the button tag withtin the event selected 
  // (delegation container) 
  if (event.target.tagName === 'BUTTON')
    resultSpan.textContent = event.target.textContent;
  // console.log(resultSpan.textContent);

}

const removeListener = (event) => {
  event.target.removeEventListener('click', handleDelegation);
}

const addNewRandomNumber = (event) => {
  const li = document.createElement('li');
  // generates random number
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // sets li text content to random number
  li.textContent = randomNumber
  // targets ul element
  const ul = document.getElementById('random-numbers');
  // append the random number li to the ul
  ul.appendChild(li);
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);

  const clickButton = document.querySelector('#click-button');
  clickButton.addEventListener('click', clickCounterHandler);

  const body = document.querySelector('body');
  body.addEventListener('keydown', handleKeydown)

  const inlineButton = document.querySelector('#inline-example');
  inlineButton.removeAttribute("onclick");
  inlineButton.addEventListener('click', clickCounterHandler)

  const addRandomNum = document.querySelector('#add-random-num');
  addRandomNum.addEventListener('click', addNewRandomNumber)

  const remove = document.querySelector('#remove')
  remove.addEventListener('click', (e) => {
    // To remove an event listener, provide the event type and the handler
    // in this case, we already know
    delegationContainer.removeEventListener('click', handleDelegation);
  })
}
main();
