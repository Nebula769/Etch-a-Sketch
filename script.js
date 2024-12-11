// create initial 16x16 grid'
function createGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        container.appendChild(square);
    }

}

const DEFAULT_SIZE = 16*16;
createGrid(DEFAULT_SIZE);

container.addEventListener("mouseover", function(e) {
    if (e.target && e.target.classList.contains("grid-square")) {
        e.target.style.backgroundColor = "black";
    }

});


const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    let userInput = prompt("Enter the size of the new grid: (1-100)");
    while (userInput < 1 || userInput > 100) {
        userInput = prompt("Please enter a number between 1 and 100");
    }
    container.innerHTML = "";
    let inputNum = parseInt(userInput);
    createGrid(inputNum*inputNum);

});