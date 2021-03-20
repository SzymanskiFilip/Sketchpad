let container = document.getElementById('container');
let changeSizeButton = document.getElementById('change-size-button');
let randomColorButton = document.getElementById('random-color-button');
let randomColorButtonState = true;

randomColorButton.addEventListener('click', function(){
    if(randomColorButtonState == true){
        randomColorButton.innerHTML = "<h1>RANDOM COLOR: OFF</h1>";
    } else if(randomColorButtonState == false){
        randomColorButton.innerHTML = "<h1>RANDOM COLOR: ON</h1>";
    }
});

function randomColorSwitch(){
    
}

//Adds a event listener to the change size button
changeSizeButton.addEventListener('click', function(){
    changeSize();
});

//removes all elements of the grid
function removeGridElements(){
    let items = document.querySelectorAll('.item');
    items.forEach(element => element.remove());
}

//randomizes a color
function randomColor(){
    const random = Math.floor(Math.random()*16777215).toString(16);
    return "#"+random;
}

//changes the size of the grid
function changeSize(){
    let size = prompt('Enter the grid size: ');
    if(size < 1){
        alert('Minimum size of grid is 1!');
        size = 1;
    }
    if(size > 100){
        alert('The maximal size of the grid is 100, setting it to 100');
        size = 100;
    }
    removeGridElements();
    initializeGrid(size);
}

//creates a new grid with the given size after the click
//adds a eventListener to every element
function initializeGrid(gridSize){
    for(let x = 1; x < gridSize * gridSize + 1; x++){
        let gridElement = document.createElement("div");
        gridElement.className = "item";

        if(randomColorButtonState == true){
            gridElement.addEventListener('mouseover', function(){
            gridElement.style.backgroundColor = randomColor();
            });
        }

        if(randomColorButtonState == false){
            gridElement.addEventListener('mouseover', function(){
            gridElement.style.backgroundColor = chosenColor();
            });
        }    

        container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        container.appendChild(gridElement); 
    }
}

initializeGrid(10);

