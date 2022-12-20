let etchMode = document.getElementById("etchMode");
let board = document.getElementById("container");
let num = document.getElementById("gridSize");
let bar = document.getElementById("size");
let pixelMode = document.getElementById("pixelMode");
let colorPicker = document.getElementById("colorPicker");
let color = colorPicker.value;
let newBoard = document.getElementById("generate");

colorPicker.addEventListener("change", function(){
    color=colorPicker.value;
    num.style.color = color
    console.log(color);
})

start();

function colorChange(){
    this.style.backgroundColor = color;
}

function start(){
    
    gridSize = 16;
    num.innerHTML = bar.value + "x" + bar.value;
    board.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let total = gridSize*gridSize;
    for(let i=0; i < total; i++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        board.appendChild(cell);
    }
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length;i++){
        cells[i].addEventListener("mouseover", colorChange)
    }
}

newBoard.addEventListener("click", function(){
    board.replaceChildren();
    let gridSize = document.getElementById("size").value;
    
    board.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let total = gridSize*gridSize;
    for(let i=0; i < total; i++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        board.appendChild(cell);
    }
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length;i++){
        cells[i].addEventListener("mouseover", colorChange)
    }
})

bar.addEventListener("change", function(){
    num.innerHTML = bar.value + "x" + bar.value;
})

pixelMode.addEventListener("click", function(){
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++){
        cells[i].removeEventListener("mouseover", colorChange)
        cells[i].addEventListener("click", colorChange);
    }
})

etchMode.addEventListener("click", function(){
    let cells = document.getElementsByClassName("cell");
    for(let i = 0; i < cells.length; i++){
        cells[i].removeEventListener("click", colorChange)
        cells[i].addEventListener("mouseover", colorChange);
    }
    
})
