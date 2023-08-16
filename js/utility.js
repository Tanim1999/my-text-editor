function getElementChangeFont(elementId,className){
    const getElement= document.getElementById(elementId)
    getElement.classList.add(className)

}

function getElementRemoveFont(elementId,className){
    const getElement= document.getElementById(elementId)
    getElement.classList.remove(className)
    
}



const textArea=document.getElementById("text-area")
textArea.addEventListener("click",function(){
    
textArea.focus();
})