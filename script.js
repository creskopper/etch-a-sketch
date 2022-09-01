const container = document.querySelector(".container");
const divsDocumentFragment = new DocumentFragment();
const newGridBtn = document.getElementById("new-grid");
const resetGridBtn = document.getElementById("reset-grid");
const paintGridBtn = document.getElementById("paint-grid");
const eraseGridBtn = document.getElementById("erase-grid");
let initialGrid = 16;
let squaresPerSide = 0;
let isDown = false;
let paint = false;
let erase = false;

createGridSquare(initialGrid);
addGridTemplate(initialGrid);
paintGrid();
eraseGrid();

container.addEventListener("mousedown", () => {
    isDown = true;
});
container.addEventListener("mouseup", () => {
    isDown = false;
});
container.addEventListener("mouseleave", () => {
    isDown = false;
});

newGridBtn.addEventListener("click", () => {
    do {
        squaresPerSide = Number(prompt("Enter squares per side! (Maximum 100)"));
    } while (squaresPerSide > 100);
    
    paint = false;
    erase = false;

    if(!squaresPerSide) return;
    
    removeGrid();
    createGridSquare(squaresPerSide);
    addGridTemplate(squaresPerSide);
    paintGrid();
    eraseGrid();
});
resetGridBtn.addEventListener("click", () => {
    paint = false;
    erase = false;
    squaresList.forEach(square => {
        square.classList.remove("square-colored");
    })
});
paintGridBtn.addEventListener("click", () => {
    paint = true;
    erase = false;
});
eraseGridBtn.addEventListener("click", () => {
    paint = false;
    erase = true;
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
            if(paint) {
                square.classList.add("square-colored");
            } else return;
        })
    });
    squaresList.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(paint) {
                square.classList.add("square-colored");
            } else return;
        })
    });
}

function eraseGrid() {
    squaresList = document.querySelectorAll(".square");

    squaresList.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            if(!isDown) return;
            e.preventDefault();
            if(erase) {
                square.classList.remove("square-colored");
            } else return;
        })
    });
    squaresList.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(erase) {
                square.classList.remove("square-colored");
            }
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