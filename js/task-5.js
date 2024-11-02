`use strict`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");

function changeColor() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor; 
}

button.addEventListener("click", changeColor)