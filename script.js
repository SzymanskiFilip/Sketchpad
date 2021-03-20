let container = document.getElementById('container');
let defaultGridSize = 16;

for(let x = 0; x < defaultGridSize * defaultGridSize; x++){
        let gridElement = document.createElement("div");
        gridElement.className = "item";
        gridElement.textContent = `${x}`
        
        container.style.gridTemplateColumns = `repeat(${defaultGridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${defaultGridSize}, auto)`;
        container.appendChild(gridElement);
    }