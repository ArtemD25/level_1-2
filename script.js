const blackSquare = document.querySelector("#black-square");
const jsBtn = document.querySelector(".task1__btn-js");
const cssJsBtn = document.querySelector(".task1__btn-css-js");

jsBtn.addEventListener("click", function() {
  if (blackSquare.style.visibility === "hidden") {
    blackSquare.style.visibility = "visible";
  } else {
    blackSquare.style.visibility = "hidden";
  }
});

cssJsBtn.addEventListener("click", function() {
  blackSquare.style.visibility = "";

  blackSquare.classList.toggle("hidden");
});
