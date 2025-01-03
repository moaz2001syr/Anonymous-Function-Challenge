document.getElementById("startBtn").addEventListener("click", function(){
    console.log("test");

    
    this.style.backgroundColor = generatRandomRgb()
    
    setInterval(function(){

        document.getElementById("bg").style.backgroundColor = generatRandomRgb()
    }, 1000)
})

function generateRandomNumber(){
    return Math.random()*255
}

function generatRandomRgb(){
    var randomR = generateRandomNumber()
    var randomG = generateRandomNumber()
    var randomB = generateRandomNumber()
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}