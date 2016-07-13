var link = document.querySelector(".like-link");
var form=document.querySelector("#new-comment");
var comentBody=document.querySelector("#new-comment-body");
var incN=document.querySelector(".like-count");
var newcoment= document.querySelector("#comments");

link.addEventListener("click", like);
form.addEventListener("submit", comment);


function like() {
event.preventDefault();
var number1 = parseInt(incN.textContent);
incN.textContent = parseInt( number1 + 1);
}

function comment() {
event.preventDefault();
var newelement = document.createElement("div");
newelement.setAttribute("class","comment");
newelement.textContent=comentBody.value;
newcoment.appendChild(newelement);
newelement.reset;
}
