const addBtn = document.querySelector('button');
const divSection = document.querySelector('section.addDiv');
let divCounter = 0;

const addDiv = function () {
    divCounter++;
    let newDiv = document.createElement('div');
    newDiv.textContent = divCounter;
    divSection.appendChild(newDiv);

    if (divCounter % 5 === 0) {
        newDiv.classList.add('styled')
    }
}

addBtn.addEventListener('click', addDiv)