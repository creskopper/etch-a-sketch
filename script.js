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