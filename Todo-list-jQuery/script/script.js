
//
// var form = document.querySelector("#new-item-form");
// var button = document.querySelector(".buttonish");
// var ul = document.querySelector("#todo-list");
// var itemInput = document.querySelector("#new-item-input")
//
//
// function formSubmitted(event) {
//
//   event.preventDefault();
//   var items = itemInput.value.split(",")
//   items.forEach(addlistItem)
//   form.reset();
// }
//
//
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
