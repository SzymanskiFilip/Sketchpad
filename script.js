let container = document.getElementById('container');
let changeSizeButton = document.getElementById('change-size-button');

changeSizeButton.addEventListener('click', function(){
    changeSize();
});

function removeGridElements(){
    let items = document.querySelectorAll('.item');
    items.forEach(element => element.remove());
}


function changeSize(){
    let size = prompt('Enter the grid size: ');
    removeGridElements();
    initializeGrid(size);
}


function initializeGrid(gridSize){
    for(let x = 1; x < gridSize * gridSize + 1; x++){
        let gridElement = document.createElement("div");
        gridElement.className = "item";
        gridElement.textContent = `${x}`;
        
        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(gridElement);
    }
}

initializeGrid(2);

