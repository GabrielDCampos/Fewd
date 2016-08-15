var form = $("#new-item-form");
var button = $(".buttonish");
var ul = $("#todo-list");
var itemInput = $("#new-item-input");

form.on("submit", formSubmitted);

function formSubmitted(event) {

  event.preventDefault();

  var items = itemInput.val().split(",").forEach(addlistItem)
  form [0].reset();
}

function addlistItem(item){
  console.log("hello there")
  var li = $("<li>").appendTo(ul)
  var label = $("<label>").appendTo(li)
  var input = $("<input>").appendTo(label).attr("type","checkbox")
  var span = $("<span>").appendTo(label).text(item.trim())

}

// var form = document.querySelector("#new-item-form");
// var button = document.querySelector(".buttonish");
// var ul = document.querySelector("#todo-list");
// var itemInput = document.querySelector("#new-item-input")

// function addlistItem(item){
//   console.log("hello there")
//   var li =  document.createElement("li");
//   var label = document.createElement("label");
//   var input = document.createElement("input");
//   var span = document.createElement("span");
//   ul.appendChild(li);
//   li.appendChild(label);
//   label.appendChild(input);
//   label.appendChild(span);
//
//   span.textContent = item.trim(item);
//   input.setAttribute("type", "checkbox")
//
// }
//
// form.addEventListener("submit", formSubmitted);
