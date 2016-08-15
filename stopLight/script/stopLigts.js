
var stop = document.querySelector(".Stop");
var caution = document.querySelector(".Caution");
var go = document.querySelector(".GO");
var alert = document.querySelector(".Alert");

stop.addEventListener("click", redLight);
caution.addEventListener("click", yellowLight);
go.addEventListener("click", greenLight);
alert.addEventListener("click", alertLight);

var red = document.querySelector(".offRed");
var yellow = document.querySelector(".offYellow");
var green = document.querySelector(".offGreen");
var alertFlash;

function redLight(){
red.classList.toggle("redLightup");
yellow.classList.remove("yellowLightup");
green.classList.remove("greenLightup");
clearInterval(alertFlash);

}
function yellowLight(){
yellow.classList.toggle("yellowLightup");
red.classList.remove("redLightup");
green.classList.remove("greenLightup");
clearInterval(alertFlash);

}
function greenLight(){
green.classList.toggle("greenLightup");
yellow.classList.remove("yellowLightup");
red.classList.remove("redLightup");
clearInterval(alertFlash);

}
function alertTick(){
yellow.classList.toggle("yellowLightup");
red.classList.remove("redLightup");
green.classList.remove("greenLightup");

}

function alertLight(){
alertFlash = setInterval(alertTick,800);

}
