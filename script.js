const container = document.querySelector("#container");

function createGrid(size){
    let num = 0
    for (let i = 0; i < size ; i++){
        var outerDivs = document.createElement("div")
        
        for (let j = 0; j <size ; j++){
            var innerDivs = document.createElement("div")
            innerDivs.classList.toggle("drawing_board")
            
            outerDivs.appendChild(innerDivs);

            innerDivs.style.margin = "0px";
            innerDivs.style.border = "1px black";
            innerDivs.style.borderStyle = "solid";
            innerDivs.style.padding = "2px";  
            innerDivs.style.minWidth = "10px";
            innerDivs.style.minHeight = "10px"
            innerDivs.style.backgroundColor = "white";
            innerDivs.textContent = j
        }
        container.appendChild(outerDivs)
    }
}
createGrid(16)
const drawingBoard = document.querySelectorAll(".drawing_board")
drawingBoard.forEach(function(square){
    square.addEventListener("mouseover", function(e) { 
        console.log(1)
        square.style.backgroundColor = "black"

})
})

