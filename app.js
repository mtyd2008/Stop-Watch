
var sec = document.querySelector("#sec")
var num2 = document.querySelector("#num2")
var num3 = document.querySelector("#num3")




var num = 0;
var min = 0;
var hrs = 0;
var timer;

function startTime(){
    timer = setInterval(function (){
    num += 1;
    sec.innerHTML = num
    
    if (num === 60) {
        min +=  1
        num = 0 
        num2.innerHTML = `:${min}`
    }
   

    if (min === 60) {
        hrs +=  1
        min = 0
        num3.innerHTML = `:${hrs}`
    }




}, 1000)
}

function stopTime(){
    clearInterval(timer)
}


function resetTime(){
    num = 0
    min = 0
    hrs = 0
    
    sec.innerHTML = "00"
    min.innerHTML = ":00"
    hrs.innerHTML = ":00"

    clearInterval(timer)
}

