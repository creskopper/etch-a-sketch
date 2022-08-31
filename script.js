const container = document.querySelector(".container");
const divsDocumentFragment = new DocumentFragment();
let squaresPerSide = 20;
let numberOfDivs = squaresPerSide * squaresPerSide;

container.style.gridTemplateColumns = `repeat(${squaresPerSide}, auto)`;
container.style.gridTemplateRows = `repeat(${squaresPerSide}, auto)`;

createGridSquare();

function createGridSquare() {
    for(i = 0; i < numberOfDivs; i++) {
        div = document.createElement("div");
        div.classList.add("square");
        divsDocumentFragment.appendChild(div);
    }
    container.appendChild(divsDocumentFragment);
}

let squaresList = document.querySelectorAll(".square");
let isDown = false;

container.addEventListener("mousedown", () => {
    isDown = true;
});
container.addEventListener("mouseup", () => {
    isDown = false;
});
container.addEventListener("mouseleave", () => {
    isDown = false;
});

squaresList.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        if(!isDown) return;
        e.preventDefault();
        square.classList.add("square-colored");
    })
});

squaresList.forEach(square => {
    square.addEventListener("mousedown", (e) => {
        e.preventDefault();
        square.classList.add("square-colored");
    })
});