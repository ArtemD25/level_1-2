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
});

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
    const text = document.createTextNode("Image not found");
    const span = document.createElement("span");
    span.style.textAlign = "center";
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

const inputTask9 = document.querySelector(".task9__input");
const btnTask9 = document.querySelector(".task9__btn");
const btnCopyTask9 = document.querySelector(".task9__btn--copy");
const imageContainer = document.querySelector(".task9__images");
const links = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
];

/**
 * Copies to clipboard default links
 */
btnCopyTask9.addEventListener("click", function() {
  navigator.clipboard.writeText(links.join("\n"));
});

/**
 * Makes display-button parse user input and display images
 */
btnTask9.addEventListener("click", parseTextAreaInput);

/**
 * Deletes all previous li elements, splits user
 * input string by new lines, checks strings for being
 * links to images and displays images if found any
 */
function parseTextAreaInput() {
  clearAllLiElements();
  const urlsArray = inputTask9.value.split("\n");
  checkImgAndDisplay(urlsArray);
}

/**
 * Deletes all li-elements
 */
function clearAllLiElements() {
  let liElements = imageContainer.children;
  let amount = liElements.length;

  for (let i = 0; i < amount; i++) {
    liElements[0].remove();
  }
}

/**
 * Checks strings for being links to images
 * 
 * @param {array} urlsArray 
 */
function checkImgAndDisplay(urlsArray) {
  for (let url of urlsArray) {
    const img = new Image();
    img.src = url;
    img.onload = displayImg(url);
  }
}

/**
 * Gets a li-element and adds it to the
 * image container (ul)
 * 
 * @param {string} url is the link to an image
 */
function displayImg(url) {
  const li = createLiElement(url);
  imageContainer.appendChild(li);
}

/**
 * Creates a li-element and sets its 
 * background0image proprety to the
 * url provided
 * 
 * @param {string} url is a link to an image
 * @returns 
 */
function createLiElement(url) {
  const li = document.createElement("li");
  li.style.backgroundImage = `url(${url})`;
  return li;
}

//* Task 10

const xNum = document.querySelector(".task10__x-num");
const yNum = document.querySelector(".task10__y-num");

/**
 * Writes mouse x- and y-coordinates each time mouse moves
 */
document.addEventListener("mousemove", function(evt) {
  xNum.innerText = evt.clientX;
  yNum.innerText = evt.clientY;
});

//* Task 11

document.querySelector(".task11__lang").innerText = navigator.language;

//* Task 12

const latitudeText = document.querySelector(".task12__latitude");
const longitudeText = document.querySelector(".task12__longitude");

displayLocation();

/**
 * Checks wether the user` browser supposrts geolocation.
 * If supposrts, it tries to get user`s location and display it.
 * If failed or if browser does not support it, displays error message
 */
function displayLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, handleError);
  } else {
    handleError
  }
}

/**
 * Displays user`s location
 * 
 * @param {object} position is the object containing user`s position data
 */
function showLocation(position) {
  latitudeText.innerText = position.coords.latitude;
  longitudeText.innerText = position.coords.longitude;
}

/**
 * Displays error message if failed to load user`s location
 */
function handleError() {
  latitudeText.style.color = "red";
  longitudeText.style.color = "red";

  latitudeText.innerText = "Couldn`t get your location =(";
  longitudeText.innerText = "Couldn`t get your location =(";
}

//* Task 13

const btnTask13 = document.querySelector(".task13__reload");
const inputTask13LocalStorage = document.querySelector(".task13__input--ls");
const inputTask13Cookies = document.querySelector(".task13__input--ck");
const inputTask13SessionStorage = document.querySelector(".task13__input--ss");

/**
 * Makes the "Reload button" reload the web page
 */
btnTask13.addEventListener("click", function() {
  document.location.reload();
});

/**
 * Makes browser to paste saved text if any to boxes
 * when web page is loaded
 */
document.addEventListener("DOMContentLoaded", function() {
  inputTask13LocalStorage.innerText = localStorage.getItem("task13_input_ls");
  getCookieData();
  inputTask13SessionStorage.innerText = sessionStorage.getItem("task13_input_ss");
});

/**
 * Gets all cookies, looks for the right one and
 * pastes saved text to the relevant box
 */
function getCookieData() {
  const cookieArr = document.cookie.split("; ");
  let data = getSavedData(cookieArr);
  if (data) {
    inputTask13Cookies.innerText = data;
  } else {
    inputTask13Cookies.innerText = "";
  }
}

/**
 * Analyzes all cookies presented as an array for having
 * the key of 'task13_input_ck'. If found, returns its value.
 * If not, returns an empty string.
 * 
 * @param {array} cookieArr is an array with all cookies
 * separated by '; '
 * @returns an empty string if did not find the right cookie.
 * Returns cookie`s value if found the right cookie.
 */
function getSavedData(cookieArr) {
  for (let cookie of cookieArr) {
    let equalSignIndex = cookie.indexOf("=");
    if (cookie.slice(0, equalSignIndex) === "task13_input_ck") {
      return cookie.slice(equalSignIndex + 1);
    }
  }
  return "";
}

/**
 * Makes browser to save data before user reloads page
 */
window.addEventListener("unload", function() {
  saveDataToLocalStorage();
  saveDataToCookie();
  saveDataToSessionStorage();
});

/**
 * Saves data to localStorage
 */
function saveDataToLocalStorage() {
  localStorage.setItem("task13_input_ls", inputTask13LocalStorage.innerText);
}

/**
 * Saves data to cookie
 */
 function saveDataToCookie() {
  const date = new Date(Date.now() + 86400e3).toUTCString;
  document.cookie = `task13_input_ck=${inputTask13Cookies.innerText}; expires=${date}`;
}

/**
 * Saves data to sessionStorage
 */
function saveDataToSessionStorage() {
  sessionStorage.setItem("task13_input_ss", inputTask13SessionStorage.innerText);
}

//* Task 14

const btnToTop14 = document.querySelector(".task14__back-to-top");

/**
 * Makes the browser hide the "get to the top" button if
 * user has not scrolled yet and show it if user scrolled
 */
document.addEventListener("scroll", function() {
  if (pageYOffset !== 0) {
    btnToTop14.style.display = "block";
  } else {
    btnToTop14.style.display = "none";
  }
});

/**
 * Makes the browser smoothly scroll the page up to the top
 */
btnToTop14.addEventListener("click", function() {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
});

//* Task 15

const divInnerTask15 = document.querySelector(".task15__inner-block");
const divOuterTask15 = document.querySelector(".task15__outer-block");

/**
 * Makes the browser to alert the 'data-name' attribute`s content 
 * of the inner div. Besides that, it stops further event bubbling
 */
divInnerTask15.addEventListener("click", function(evt) {
  evt.stopPropagation();
  alert(`You clicked on ${this.getAttribute("data-name")}`);
})

/**
 * Makes the browser to alert the 'data-name' attribute`s content 
 * of the inner div
 */
divOuterTask15.addEventListener("click", function() {
  alert(`You clicked on ${this.getAttribute("data-name")}`);
})


//* Task 16

const modalTask16 = document.querySelector(".task16__modal");
const btnTask16 = document.querySelector(".task16__show-modal");

/**
 * Shows modal and prevents the web page from scrolling
 */
btnTask16.addEventListener("click", function() {
  modalTask16.style.display = "block";
  document.body.style.overflow = "hidden";
});

/**
 * Hides modal and allows the web page to be scrolled
 */
modalTask16.addEventListener("click", function() {
  modalTask16.style.display = "none";
  document.body.style.overflow = "auto";
});

//* Task 17

const btnTask17 = document.querySelector(".task17__submit");

/**
 * Prevents page from being reloaded
 */
btnTask17.addEventListener("click", function(evt) {
  evt.preventDefault();
});

//* Task 18

const dropContainer = document.querySelector(".task18__label");
const fileInput = document.querySelector("#task18__input");
const btnTask18 = document.querySelector(".task18__btn");
const messageTask18 = document.querySelector(".task18__message");

dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
  evt.preventDefault();
};

/**
 * Makes the file drop area to be highlighted when user hovers a file over it.
 */
dropContainer.addEventListener("dragenter", function() {
  if (!dropContainer.classList.contains("ondrag")) {
    dropContainer.classList.add("ondrag");
  }
});

/**
 * Makes the file drop area to stop being highlighted when user hovers out a file of it.
 */
dropContainer.addEventListener("dragleave", function() {
  if (dropContainer.classList.contains("ondrag")) {
    dropContainer.classList.remove("ondrag");
  }
});

/**
 * When user dropped a file in the drop area, the area removes its highlight,
 * pastes the dropped file`s name as its inner text and shows up the button
 * to clear the file input if needed
 * 
 * @param {object} evt is the event object helping to get access to the selected file
 */
dropContainer.ondrop = function(evt) {
  dropContainer.classList.remove("ondrag");
  fileInput.files = evt.dataTransfer.files;
  dropContainer.classList.add("task18__file");
  dropContainer.innerText = evt.dataTransfer.files[0].name;
  messageTask18.classList.remove("hidden");
  evt.preventDefault();
};

/**
 * When user selected a file in the drop area, the area removes its highlight,
 * pastes the selected file`s name as its inner text and shows up the button
 * to clear the file input if needed
 * 
 * @param {object} evt is the event object helping to get access to the selected file
 */
fileInput.onchange = function(evt) {
  dropContainer.classList.remove("ondrag");
  fileInput.files = fileInput.files;
  dropContainer.classList.add("task18__file");
  dropContainer.innerText = fileInput.files[0].name;
  messageTask18.classList.remove("hidden");
  evt.preventDefault();
};

/**
 * Removes dropped / selected file from the input,
 * hides the clear-input-button and gets back the default
 * text in the file input
 */
btnTask18.addEventListener("click", function() {
  fileInput.value = "";
  dropContainer.classList.remove("task18__file");
  dropContainer.innerText = "Choose file to upload";
  messageTask18.classList.add("hidden");
});

//* Task 19

const messageTask19 = document.querySelector(".task19__message");
const btnTaskClose19 = document.querySelector(".task19__btn");
const dropContainer19 = document.querySelector(".task19__label");
const inputFile = document.querySelector(".inputTask19");
const btnTask19 = document.querySelector(".parseFileTask19");
const inputTask19 = document.querySelector(".rawTextTask19");
const outputTask19 = document.querySelector(".modifiedTextTask19");
const pasteTextTask19 = document.querySelector(".pasteRandomTextTask19");
const clearBtnTask19 = document.querySelector(".clearBoxTask19");
const randomTextArray = [
  "...????????, ??????????????????, ?????????????? ???? ????????????...",
  "????????????(!) - ???? ???????????? ?????????? ???? ???????????? ????????, ?????? ???????????? ?????? ??????????????????(!)",
  "?????????????? ???? ???????????? ???? ????????, ?? ???? ??????????(??????-??????) - ???? ?????? ??????????????",
  "?????????????? ?????????????????????? ?? ???????????????????? ?????????????? =) ?? ????????????????-????",
  "??????????-?????????????? ???????????????? ??????????????. ?????????? ???? ?? ??????????. ?? ???? ??????????????(( - ????????????",
  "????????????, ?? ??. ????????????\\ ???????????? ????????????",
];

/**
 * Uploads a CSV-file, parses it and gets top-10 cities by their population.
 * Each city-object has information on its coordinates, its name and population.
 * After that the script analyzes user text input and looks for cities names in it.
 * If any, the script substitutes those names by new sentences. 
 */
btnTask19.addEventListener("click", function() {
  let resultFunction;
  let citiesArray;

  let promise = new Promise(function(resolve) {
    let file = inputFile.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
      citiesArray = reader.result.split("\n")
      .map(function(item) {
        let userInputArr = item.split(",");
        let obj = {};
        obj.x = parseFloat(defineValue(0, userInputArr));
        obj.y = parseFloat(defineValue(1, userInputArr));
        obj.city = defineValue(2, userInputArr);
        obj.population = +(defineValue(3, userInputArr).replaceAll(" ", ""));
        return (item = obj);
      })
      .filter(function(item) {
        if (item.city === "" || item.population === "") {
          return false;
        }
        return true;
      })
      .sort(function(city1, city2) {
        return (city2.population - city1.population);
      })
      .slice(0, 10)
      .reduce(function(obj, item, index) {
        obj[item.city] = {
            x: item.x,
            y: item.y,
            population: item.population,
            rating: index,
        };
        return obj;
      }, {});

      resultFunction = (cityName) => {
        return (`${cityName} (${citiesArray[cityName].rating + 1}-?????????? ?????????? ??????-10 ???????????????????? ???????? ??????????????, ?????????????????? - ${citiesArray[cityName].population} ??????.)`);
      }

      resolve(resultFunction);
    };

    reader.onerror = function() {
      outputTask19.innerText = reader.error;
    };

  });

  promise.then(function(resultFunction) {
    const keys = Object.keys(citiesArray).join("|");
    outputTask19.innerText = inputTask19.value.replace(new RegExp(keys, "gi"), (cityName) => {
      return resultFunction(cityName);
    });
  });  
});

/**
 * Defines whether a particular word shall be deemed as a property of a city
 * or it is an empty string or a comment and shall be not included to the object
 * 
 * @param {integer} index is the index of an item from the city-object 
 * @param {array} arr is the array consisting of words parsed from the CSV-file 
 * @returns a word representing a property of a city and not an empty string or a comment
 */
function defineValue(index, arr) {
  if (arr.length >= 4) {
    let item = arr[index];
    if (item === "" || item.indexOf("#") === 0) {
      return "";
    } else {
      return item;
    }
  }
  return "";
}

clearBtnTask19.addEventListener("click", function() {
  inputTask19.value = "";
  outputTask19.value = "";
});

function pasteRandomText() {
  let index = Math.floor(Math.random() * randomTextArray.length);
  inputTask19.value = randomTextArray[index];
}

pasteTextTask19.addEventListener("click", pasteRandomText);

dropContainer19.ondragover = dropContainer19.ondragenter = function(evt) {
  evt.preventDefault();
};

/**
 * Makes the file drop area to be highlighted when user hovers a file over it.
 */
dropContainer19.addEventListener("dragenter", function() {
  if (!dropContainer19.classList.contains("ondrag19")) {
    dropContainer19.classList.add("ondrag19");
  }
});

/**
 * Makes the file drop area to stop being highlighted when user hovers out a file of it.
 */
dropContainer19.addEventListener("dragleave", function() {
  if (dropContainer19.classList.contains("ondrag19")) {
    dropContainer19.classList.remove("ondrag19");
  }
});

/**
 * When user dropped a file in the drop area, the area removes its highlight,
 * pastes the dropped file`s name as its inner text and shows up the button
 * to clear the file input if needed
 * 
 * @param {object} evt is the event object helping to get access to the dropped file
 */
dropContainer19.ondrop = function(evt) {
  dropContainer19.classList.remove("ondrag19");
  inputFile.files = evt.dataTransfer.files;
  dropContainer19.classList.add("task19__file");
  dropContainer19.innerText = evt.dataTransfer.files[0].name;
  messageTask19.classList.remove("hidden");
  evt.preventDefault();
};

/**
 * When user selected a file in the drop area, the area removes its highlight,
 * pastes the selected file`s name as its inner text and shows up the button
 * to clear the file input if needed
 * 
 * @param {object} evt is the event object helping to get access to the selected file
 */
inputFile.onchange = function(evt) {
  dropContainer19.classList.remove("ondrag19");
  inputFile.files = inputFile.files;
  dropContainer19.classList.add("task19__file");
  dropContainer19.innerText = inputFile.files[0].name;
  messageTask19.classList.remove("hidden");
  evt.preventDefault();
};

/**
 * Removes dropped / selected file from the input,
 * hides the clear-input-button and gets back the default
 * text in the file input
 */
btnTaskClose19.addEventListener("click", function() {
  inputFile.value = "";
  dropContainer19.classList.remove("task19__file");
  dropContainer19.innerText = "Choose file to upload";
  messageTask19.classList.add("hidden");
});