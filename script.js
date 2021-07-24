'use strict';

//* Task 1

let blackSquare = document.querySelector("#black-square");
const cssBtn = document.querySelector(".task1__btn-css");
const jsBtn = document.querySelector(".task1__btn-js");
const cssJsBtn = document.querySelector(".task1__btn-css-js");
const squareWrapper = document.querySelector(".task1__square-wrapper");

/**
 * Deletes / renders back the black square by
 * accessing DOM style properties
 */
cssBtn.addEventListener("click", function() {
  if (blackSquare.style.visibility === "hidden") {
    blackSquare.style.visibility = "visible";
  } else {
    blackSquare.style.visibility = "hidden";
  }
});

/**
 * Deletes / renders back the black square by
 * working with DOM element`s using js
 */
jsBtn.addEventListener("click", function() {
  if (squareWrapper.innerHTML !== "") {
    squareWrapper.innerHTML = "";
  } else {
    blackSquare = document.createElement("div");
    blackSquare.classList.add("square");
    blackSquare.id = "black-square";
    squareWrapper.insertAdjacentElement("afterbegin", blackSquare);
  }
});

/**
 * Deletes / renders back the black square by
 * working with DOM element`s classes
 */
cssJsBtn.addEventListener("click", function() {
  blackSquare.style.visibility = "";

  blackSquare.classList.toggle("hidden");
});

//* Task 2

const btnTask2 = document.querySelector(".task2__btn");
const blackSquare2 = document.querySelector(".task2__wrapper .square");

/**
 * Deletes / renders back the black square by
 * using classList.toggle
 */
btnTask2.addEventListener("click", function() {
  blackSquare2.classList.toggle("hidden");
})

//* Task 3

const btnTask3 = document.querySelector(".task3__btn");
const blackSquare3 = document.querySelectorAll(".task3__squares .square");

/**
 * Deletes / renders back 5 black squares
 * at once using for-of loop
 */
btnTask3.addEventListener("click", function() {
  for (let blackSquare of blackSquare3) {
    blackSquare.classList.toggle("hidden");
  }
});

//* Task 4

const btnTask4 = document.querySelector(".task4__btn");
const inputTask4 = document.getElementById("task4__input");
const squaresTask4 = document.querySelectorAll(".task4__squares .square");

makeSquaresShareText();

/**
 * Catches clicks on the task 4 button. If there is a square with
 * the selector a user specified in the input, the script hides
 * such square. If not, the script displays an error as the input`s
 * placeholder.
 */
btnTask4.addEventListener("click", function() {
  const inputValue = getInputValue();
  const squareSelector = ".task4__squares " + "." + inputValue;

  if (!inputValue) {
    inputTask4.value = "";
    inputTask4.placeholder = "Enter proper value";
    return;
  }
  
  if (isThereSuchSelector(squareSelector)) {
    document.querySelector(squareSelector).classList.toggle("hidden");
  } else {
    inputTask4.value = "";
    inputTask4.placeholder = `Element .${inputValue} does not exist`;
  }
  
});

/**
 * Checks wether a user submitted a dot
 * in the beginning of the input value.
 * Deletes it if he/she did.
 * 
 * @returns selector name without a dot
 * in the beginning if there was any
 */
function getInputValue() {
  let inputValue = inputTask4.value;

  if (inputValue[0] === ".") {
    return inputValue.slice(1);
  } else {
    return inputValue;
  }
}

/**
 * Checks whether the document has an
 * element with such selector or not.
 * 
 * @param {string} squareSelector is the selector
 * to be checked.
 * @returns true if such selector exists.
 */
function isThereSuchSelector(squareSelector) {
  if (document.querySelector(squareSelector) !== null) {
    return true;
  }
  return false;
}

/**
 * Makes all colored squares in task 4 to paste the
 * value of their data-color attributes to the
 * input`s value
 */
function makeSquaresShareText() {
  for (let square of squaresTask4) {
    square.addEventListener("click", function() {
      inputTask4.value = square.getAttribute("data-color");
    });
  }
}


//* Task 5

const btnTask5 = document.querySelector(".task5__btn");
const squareTask5 = document.querySelector(".task5__wrapper .square");

btnTask5.addEventListener("click", firstFunction);

/**
 * Reveals hidden square and alerts message to user.
 * After that, creates a new event listener for the button
 */
function firstFunction() {
  if (squareTask5.classList.contains("hidden")) {
    squareTask5.classList.remove("hidden");
  }
  alert("Hello!");
  btnTask5.innerText = "Hide me!";

  btnTask5.removeEventListener("click", firstFunction);
  btnTask5.addEventListener("click", secondFunction);
}

/**
 * Hides square and creates a new event listener for
 * the button after that
 */
function secondFunction() {
  squareTask5.classList.add("hidden");
  btnTask5.innerText = "Show me and alert message!";

  btnTask5.removeEventListener("click", secondFunction);
  btnTask5.addEventListener("click", firstFunction);
}

//* Task 6

const btnTask6 = document.querySelector(".task6__btn");
const squareTask6 = document.querySelector(".task6__wrapper .square");

/**
 * Hides square when the mouse is hovered over it
 */
btnTask6.addEventListener("mouseover", function() {
  squareTask6.classList.add("hidden");
});

/**
 * Shows square when the mouse is hovered over smth but the square
 */
btnTask6.addEventListener("mouseout", function() {
  squareTask6.classList.remove("hidden");
});

//* Task 7

const inputTask7 = document.querySelector(".task7__input");
const squareTask7 = document.querySelector(".task7__wrapper .square");

/**
 * Shows the square when the input is focused
 */
inputTask7.addEventListener("focus", function() {
  if (squareTask7.classList.contains("hidden")) {
    squareTask7.classList.remove("hidden");
  }
});

/**
 * Hides the square when user starts typing smth in the input
 */
inputTask7.addEventListener("input", function() {
  if (!squareTask7.classList.contains("hidden")) {
    squareTask7.classList.add("hidden");
  }
});

/**
 * Hides the square when looses focus over the input
 */
inputTask7.addEventListener("blur", function() {
  if (!squareTask7.classList.contains("hidden")) {
    squareTask7.classList.add("hidden");
  }
});

//* Task 8

const inputTask8 = document.querySelector(".task8__input");
const btnTask8 = document.querySelector(".task8__btn");
const btnPasteTask8 = document.querySelector(".task8__btn--paste");
const squareTask8 = document.querySelector(".task8__square-wrapper .square");

/**
 * Gets input user provided and sets it as background image of the square.
 * If there is no image, the script displays an error.
 */
btnTask8.addEventListener("click", function() {
  const url = inputTask8.value;
  squareTask8.innerHTML = null;
  squareTask8.style.backgroundImage = `url(${url})`;
  checkImage(url);
  inputTask8.value = "";
});

/**
 * Checks wether there is any image under user link
 * 
 * @param {string} url is the user provided url of an image
 */
function checkImage(url) {
  const img = new Image();
  img.src = url;
  img.onerror = displayErrorMessage;
}

/**
 * Creates and display error message if there is no image
 * under user link
 */
function displayErrorMessage() {
  squareTask8.style.backgroundImage = "";
    const text = document.createTextNode("Error occured");
    const span = document.createElement("span");
    span.appendChild(text);
    squareTask8.appendChild(span);
    squareTask8.style.display = "grid";
    squareTask8.style.placeItems = "center";
    squareTask8.style.color = "red";
}

/**
 * Pastes an url of a photo with raccoons to the input
 */
btnPasteTask8.addEventListener("click", function() {
  inputTask8.value = "https://www.epsilontheory.com/wp-content/uploads/raccoons-gang.jpg";
});

//* Task 9

//* Task 10

//* Task 11

//* Task 12

//* Task 13

//* Task 14

