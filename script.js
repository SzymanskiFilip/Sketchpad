let container = document.getElementById('container');
let defaultGridSize = 16;


for(let x = 0; x < defaultGridSize; x++){
    let gridElement = document.createElement("div");
    gridElement.className = "item";
    container.appendChild(gridElement);
}