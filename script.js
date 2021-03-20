let container = document.getElementById('container');
let defaultGridSize = 16;


function initializeGrid(gridSize){
    for(let x = 1; x < gridSize * gridSize + 1; x++){
        let gridElement = document.createElement("div");
        gridElement.className = "item";
        gridElement.textContent = `${x}`
        
        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(gridElement);
    }
}

initializeGrid(3);

