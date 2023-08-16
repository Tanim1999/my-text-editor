let isClicked=false



document.getElementById("bold-btn").addEventListener('click',function(){
      isClicked=!isClicked;
      if(isClicked){
        getElementChangeFont("text-area","font-bold")
        getElementChangeFont("bold-btn","bg-blue-500")
      }
      else{
        getElementRemoveFont("text-area","font-bold")
        getElementRemoveFont("bold-btn","bg-blue-500")
    }
     
     
})

document.getElementById("italic-btn").addEventListener('click',function(){
    isClicked=!isClicked
    if(isClicked){
        getElementChangeFont("text-area","italic")
        getElementChangeFont("italic-btn","bg-blue-500")
    }
    else{
        getElementRemoveFont("text-area","italic")
        getElementRemoveFont("italic-btn","bg-blue-500")
    }
})


document.getElementById("underline-btn").addEventListener('click',function(){
 isClicked=!isClicked
 if(isClicked){
    getElementChangeFont("text-area","underline")
    getElementChangeFont("underline-btn","bg-blue-500")

 }
 else{
    getElementRemoveFont("text-area","underline")
    getElementRemoveFont("underline-btn","bg-blue-500")
 }
})
