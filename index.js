const fill =document.querySelector(".fill")
const empties =document.querySelectorAll(".empty-box")

// listeners
fill.addEventListener("dragstart",dragStart)
fill.addEventListener("dragend",dragEnd)

// loops through emties 
for(empty of empties){
        empty.addEventListener("dragover",dragOver);
        empty.addEventListener("dragenter", dragEnter);
        empty.addEventListener("dragleave", dragLeave);
        empty.addEventListener("drop", dragDrop);
}
//drag functions

function dragStart() {
    // console.log("start");
    this.className +=" hold"
   setTimeout(() => this.className =" invisible",0);

}

function dragEnd() {
    // console.log("end");
    this.className = "fill"
}

function dragOver(e){
    e.preventDefault()
  
}
function dragEnter(e){
    e.preventDefault()
    this.className +=" hovered"

}
function dragLeave(){
    this.className ="empty-box"
    
    console.log("leave");
    
}
function dragDrop(){
    this.className ="empty-box"
    this.append(fill)

}