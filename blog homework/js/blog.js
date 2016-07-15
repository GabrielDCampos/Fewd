var link = document.querySelector(".like-link");
var form=document.querySelector("#new-comment");
var comentBody=document.querySelector("#new-comment-body");
var likeCountSpan=document.querySelector(".like-count");
var newcoment= document.querySelector("#comments");

link.addEventListener("click", like);
form.addEventListener("submit", comment);


function like() {
event.preventDefault();
var number1 = parseInt(likeCountSpan.textContent);

// debugger: grat for cheking if ur event listener is working

likeCountSpan.textContent = parseInt( number1 + 1);
}

function comment(event) {
event.preventDefault();
var newelement = document.createElement("div");
newelement.setAttribute("class","comment");
newelement.textContent=comentBody.value;
newcoment.appendChild(newelement);
newelement.reset;
}
