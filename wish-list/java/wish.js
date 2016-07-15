var say=document.querySelector("input");
var but=document.querySelector("button");
var ul=document.querySelector("p");
var bb=document.querySelector("body")
but.addEventListener("click", sayHey);
function sayHey(){
var div=document.createElement("div");
div.textContent=say.value
bb.appendChild(div)
}
