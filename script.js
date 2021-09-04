"use strict";

// Selecting elements from dom
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const againBtn = document.querySelector(".again");
const stepsEl = document.querySelector(".steps");
const guessEl = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const amountEl = document.querySelector(".Amount");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent=secretNumber;
let steps = 5;
let amount = 0;

// What happens when check is clicked
checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    message.textContent = "No Input";
  }
  //    if lost
  else if (guess > secretNumber) {
    message.textContent = "Too High!";
    steps--;
    stepsEl.textContent = steps;

    if (steps < 1) {
      message.textContent = "You Lost! 😢";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    message.textContent = "Too Low!";
    steps--;
    stepsEl.textContent = steps;

    if (steps < 1) {
      amount = 0;
      message.textContent = "You Lost! 😢";
      document.querySelector("body").style.backgroundColor = "red";
      amountEl.textContent = amount;
    }
  }
  //    if won
  else if (guess === secretNumber) {
    message.textContent = "Correct answer🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    number.textContent = secretNumber;

    amountEl.textContent = "100000";
    amount = amount + 100000;
    amountEl.textContent = amount;
    checkBtn.disabled = true;
  }

  guessEl.value = "";
});

// using again
againBtn.addEventListener("click", function () {
  message.textContent = "Start Guessing";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = secretNumber;
  steps = 5;

  checkBtn.disabled = false;
  stepsEl.textContent = steps;
  number.textContent = "?";
  guessEl.value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
