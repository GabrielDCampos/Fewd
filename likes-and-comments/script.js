var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();

  // Your code for like goes here
}

function comment(event) {
  event.preventDefault();
  var newelement= document.createElement("div");

  newelement.setAttribute("class","comments");
  newelement.textContent=comentBody.value;
  newelement.appendChild(comments)

  // Your code for comments goes here
}
