`use strict`

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateName() {
    const trimmed = nameInput.value.trim();
    nameOutput.textContent = trimmed ? trimmed : "Anonymous";
}

nameInput.addEventListener("input", updateName);