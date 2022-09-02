const container = document.querySelector(".container");
const divsDocumentFragment = new DocumentFragment();
const newGridBtn = document.getElementById("new-grid");
const resetGridBtn = document.getElementById("reset-grid");
const paintGridBtn = document.getElementById("paint-grid");
const eraseGridBtn = document.getElementById("erase-grid");
const rainbowPaintBtn = document.getElementById("rainbow-btn");
const colorPaintBtn = document.getElementById("color-btn");
let initialGrid = 16;
let squaresPerSide = 0;
let isDown = false;
let paint = true;
let erase = false;
let rainbow = false;
let color = true;

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

    if(!squaresPerSide) return;
    
    removeGrid();
    createGridSquare(squaresPerSide);
    addGridTemplate(squaresPerSide);
    paintGrid();
    eraseGrid();
});
resetGridBtn.addEventListener("click", () => {
    squaresList.forEach(square => {
        square.style.backgroundColor = "";
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
rainbowPaintBtn.addEventListener("click", () => {
    color = false;
    rainbow = true;
});
colorPaintBtn.addEventListener("click", () => {
    rainbow = false;
    color = true;
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
                if(rainbow) {
                    square.style.backgroundColor = `${generateRandomColor()}`;
                } else if(color) {
                    square.style.backgroundColor = "#000";
                }
            } else return;
        })
    });
    squaresList.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(paint) {
                if(rainbow) {
                    square.style.backgroundColor = `${generateRandomColor()}`;
                } else if(color) {
                    square.style.backgroundColor = "#000";
                }
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
                // square.classList.remove("square-colored");
                square.style.backgroundColor = "";
            } else return;
        })
    });
    squaresList.forEach(square => {
        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(erase) {
                // square.classList.remove("square-colored");
                square.style.backgroundColor = "";
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

function generateRandomColor() {
    r = Math.floor(Math.random() * 255); 
    g = Math.floor(Math.random() * 255); 
    b = Math.floor(Math.random() * 255); 
    return `rgb(${r}, ${g}, ${b})`
};