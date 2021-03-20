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
    if(size < 1){
        alert('Minimum size of grid is 1!');
        size = 1;
    }
    if(size > 20){
        alert('The maximal size of the grid is 20, setting it to 20');
        size = 20;
    }
    removeGridElements();
    initializeGrid(size);
}


function initializeGrid(gridSize){
    for(let x = 1; x < gridSize * gridSize + 1; x++){
        let gridElement = document.createElement("div");
        gridElement.className = "item";
        gridElement.textContent = `${x}`;
        
        gridElement.addEventListener('mouseover', function(){
            gridElement.style.backgroundColor = 'blue';
        });

        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(gridElement); 
    }
}

initializeGrid(2);

