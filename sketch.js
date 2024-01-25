
const GRIDSIZE = 100;
const GRIDWIDTH = 960;
const BORDERSIZE = 1;
const DIVSQUARESIZE = (GRIDWIDTH/GRIDSIZE) - (BORDERSIZE *2);

window.ondragstart = function() { return false; } 


let container = document.getElementById("container");
container.style.width = GRIDWIDTH+"px";
container.style.height = GRIDWIDTH+"px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = BORDERSIZE+"px solid black";
container.style.justifyContent = "stretch";
container.draggable = false;

for(let i = 0; i<GRIDSIZE*GRIDSIZE;i++){
    addSketchDiv();
}

function addSketchDiv(){
    let sketchDiv = document.createElement("div");
    sketchDiv.className = "grid-square";
    sketchDiv.style.flex = "1 0 auto";
    sketchDiv.style.width = DIVSQUARESIZE+"px";
    sketchDiv.style.height = DIVSQUARESIZE+"px";
    sketchDiv.style.border = BORDERSIZE+"px solid black"
    sketchDiv.draggable = false;
    sketchDiv.addEventListener("mouseover",(e)=>{
        if(e.buttons == 1){
            sketchDiv.style.backgroundColor = "black";
        }
    });
    sketchDiv.addEventListener("click",(e)=>{
            e.preventDefault();
            sketchDiv.style.backgroundColor = "black";
    });
    container.appendChild(sketchDiv)
}