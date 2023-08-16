
document.getElementById("alignLeft").addEventListener('click',function(){
    isClicked=!isClicked;
    if(isClicked){
        getElementChangeFont("text-area","text-left")
        getElementChangeFont("alignLeft","bg-blue-500")
    }
    else{
        getElementRemoveFont("text-area","text-left")
        getElementRemoveFont("alignLeft","bg-blue-500")
        
    }
    
})
document.getElementById("alignCenter").addEventListener('click',function(){
    isClicked=!isClicked
    if(isClicked){
        getElementChangeFont("text-area","text-center")
        getElementChangeFont("alignCenter","bg-blue-500")
    }
    else{
        getElementRemoveFont("text-area","text-center")
        getElementRemoveFont("alignCenter","bg-blue-500")
    }
    
})
document.getElementById("alignRight").addEventListener('click',function(){
    isClicked=!isClicked
    if(isClicked){
        getElementChangeFont("text-area","text-right")
        getElementChangeFont("alignRight","bg-blue-500")
    }
    else{
        getElementRemoveFont("text-area","text-right")
        getElementRemoveFont("alignRight","bg-blue-500")
    }
    
})