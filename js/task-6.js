`use strict`

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    
    if (amount < 1 || amount > 100) {
        return;
    }

    destroyBoxes();
    createBoxes(amount);
    input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const boxes = [];
    
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        // box.style.margin = '44px';
        // box.style.display = 'flex';
        // box.style.flexDirection = 'row';
        // box.style.gap = '44px';
        boxes.push(box);
    }
    boxesContainer.style.display = 'flex';
    boxesContainer.style.flexDirection = 'row';
    boxesContainer.style.flexWrap = 'wrap';
    boxesContainer.style.gap = '44px';
    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
