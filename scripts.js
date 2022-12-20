let create = document.getElementById("makeGrid");
let board = document.getElementById("container");
let num = document.getElementById("gridSize");
let bar = document.getElementById("size");
let pixelMode = document.getElementById("pixelMode");
let colorPicker = document.getElementById("colorPicker");
let color = colorPicker.value;

colorPicker.addEventListener("change", function(){
    color=colorPicker.value;
    console.log(color);
})

start();

function start(){
    board.replaceChildren();
    gridSize = 16;
    num.innerHTML = bar.value + "x" + bar.value;
    board.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let total = gridSize*gridSize;
    for(let i=0; i < total; i++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        board.appendChild(cell);
        cell.addEventListener("mouseover", function(e){
            this.style.backgroundColor = color;
        })

    }
}

create.addEventListener("click", function(){
    board.replaceChildren();
    let gridSize = document.getElementById("size").value;
    
    board.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let total = gridSize*gridSize;
    for(let i=0; i < total; i++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        board.appendChild(cell);
        cell.addEventListener("mouseover", function(e){
            this.style.backgroundColor = color;
        })

    }
   
 
  
})

pixelMode.addEventListener("click", function(){
    board.replaceChildren();
    let gridSize = document.getElementById("size").value;
    
    board.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    let total = gridSize*gridSize;
    for(let i=0; i < total; i++){
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        board.appendChild(cell);
        cell.addEventListener("click", function(e){
            this.style.backgroundColor = color;
        })

    }
   
 
  
})



bar.addEventListener("change", function(){
    num.innerHTML = bar.value + "x" + bar.value;
})

