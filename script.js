const container = document.querySelector(".container");
const divsDocumentFragment = new DocumentFragment();
let initialGrid = 16;
let squaresPerSide = 0;
let numberOfDivs = squaresPerSide * squaresPerSide;
const newGridBtn = document.getElementById("new-grid");
let isDown = false;

createGridSquare(initialGrid);
addGridTemplate(initialGrid);
paintGrid();

newGridBtn.addEventListener("click", () => {
    removeGrid();
    squaresPerSide = Number(prompt("Enter squares per side!"));
    createGridSquare(squaresPerSide);
    addGridTemplate(squaresPerSide);
    paintGrid(squaresPerSide);
});
container.addEventListener("mousedown", () => {
    isDown = true;
});
container.addEventListener("mouseup", () => {
    isDown = false;
});
container.addEventListener("mouseleave", () => {
    isDown = false;
});

function createGridSquare(side) {
    for(i = 0; i < (side ** 2); i++) {
        div = document.createElement("div");
        div.classList.add("square");
        divsDocumentFragment.appendChild(div);
    }
    container.appendChild(divsDocumentFragment);
}

function paintGrid() {
    squaresList = document.querySelectorAll(".square");

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
}

function removeGrid() {
    squaresList = document.querySelectorAll(".square");
    squaresList.forEach(square => {
        container.removeChild(square);
    })
}

function addGridTemplate(init) {
    container.style.gridTemplateColumns = `repeat(${init}, auto)`;
    container.style.gridTemplateRows = `repeat(${init}, auto)`;

}