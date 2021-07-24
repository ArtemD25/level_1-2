'use strict'

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

btnTask4.addEventListener("click", function() {
  const inputValue = inputTask4.value;
  const squareSelector = ".task4__squares " + "." + inputValue;

  if (!inputValue) {
    inputTask4.value = "";
    inputTask4.placeholder = `Enter proper value`;
    return;
  }
  
  if (isThereSuchSelector(squareSelector)) {
    document.querySelector(squareSelector).classList.toggle("hidden");
  } else {
    inputTask4.value = "";
    inputTask4.placeholder = `Element .${inputValue} does not exist`;
  }
});

function isThereSuchSelector(squareSelector) {
  if (document.querySelector(squareSelector) !== null) {
    return true;
  }
  return false;
}

//* Task 5

//* Task 6

//* Task 7

//* Task 8

//* Task 9

//* Task 10

//* Task 11

//* Task 12

//* Task 13

//* Task 14

