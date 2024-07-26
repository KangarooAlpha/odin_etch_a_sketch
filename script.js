const container = document.querySelector("#container");

function createGrid(size = 16){
    let num = 0
    for (let i = 0; i < size ; i++){
        var outerDivs = document.createElement("div")
        outerDivs.classList.toggle("drawing_board")

        outerDivs.style.display = "flex";
        outerDivs.style.flexDirection = "column"
        outerDivs.style.flex = "1 auto"
        
        for (let j = 0; j <size ; j++){
            var innerDivs = document.createElement("div")
            innerDivs.classList.toggle("drawing_board")
            
            outerDivs.appendChild(innerDivs);
            innerDivs.style.margin = "none";
            innerDivs.style.border = "none";
//            innerDivs.style.borderStyle = "solid";
            innerDivs.style.padding = `calc(100%/${size})`;  
            innerDivs.style.minWidth = `calc(500px/(${size}))`;
            innerDivs.style.minHeight = `calc(500px/(${size}))`;
            innerDivs.style.backgroundColor = "white";
          innerDivs.style.height = "100%";
          innerDivs.style.width = "100%";

        }
        outerDivs.style.height = "100%";
        outerDivs.style.width = "100%";
        container.appendChild(outerDivs)
    }
    toDraw()
    toReset()
    
}
createGrid()

const gridSize = document.querySelector("#input")
gridSize.addEventListener("click", ()=>{
    userInput = askUser();
    document.querySelectorAll(".drawing_board").forEach(e => e.remove()); 
    createGrid(userInput);

})


function toDraw(){
    var drawingBoard = document.querySelectorAll(".drawing_board")
    drawingBoard.forEach(function(square){
        square.addEventListener("mouseover", function(e) { 
            square.style.backgroundColor = "green"

    })
    })
}

function toReset(){
    const reset = document.querySelector("#reset")
    var drawingBoard = document.querySelectorAll(".drawing_board")
    reset.addEventListener("click", ()=> {
        drawingBoard.forEach(function(square){
               square.style.backgroundColor = "white"
            })
        })
}


function askUser(){
    let result = parseInt(prompt("Please input a size for the grid, between 1-100"))
    if (isNaN(result)) {
       return (askUser());
    }
    if (result > 100) {
        result = (100);
    }
    console.log(result) 
    return result;
}