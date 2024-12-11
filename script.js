// create initial 16x16 grid'
function createGrid(size) {
    const gridSize = size;
    const squareSize = 800 / gridSize;
    const container = document.querySelector("#container");
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

}

const DEFAULT_SIZE = 16;
createGrid(DEFAULT_SIZE);
let isMouseDown = false;

container.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
        isMouseDown = true;
        e.preventDefault();
    }
    
});

container.addEventListener("mouseup", () => {
    isMouseDown = false;
});

container.addEventListener("mousemove", function(e) {
    if (isMouseDown && e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black";
    }

});

// user prompt to reset grid
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    let userInput = prompt("Enter the size of the new grid: (1-100)");
    while (userInput < 1 || userInput > 100) {
        userInput = prompt("Please enter a number between 1 and 100");
    }
    container.innerHTML = "";
    let inputNum = parseInt(userInput);
    createGrid(inputNum);

});