const textArea=document.getElementById("text-area")

const numberInputField= document.getElementById("numberInput")

numberInputField.addEventListener("input",function(){
   const fontSize=numberInputField.value
   textArea.style.fontSize= `${fontSize}px`
})


const colorInputField=document.getElementById("colorInput")
colorInputField.addEventListener("input",function(){
    const textColor=colorInputField.value
    textArea.style.color=`${textColor}`
})