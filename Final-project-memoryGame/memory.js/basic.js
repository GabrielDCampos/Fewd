


var firstCard;
var secondCard;

var cardImgs = ["flags-imgs/1.png", "flags-imgs/2.png", "flags-imgs/3.png", "flags-imgs/4.png"]
cardImgs = shuffle(cardImgs.concat(cardImgs));

creatingCards();
function creatingCards(){
  for (var i = 0; i < 8; i++) {
    $("<div>").addClass("card cardFaceDown").appendTo(".main-board")
      .css("background-image", "url(" + cardImgs[i] + ")")
      .on("click", flipCard)

  }

}

function shuffle(array) {
 var currentIndex = array.length, temporaryValue, randomIndex;

 // While there remain elements to shuffle...
 while (0 !== currentIndex) {
   // Pick a remaining element...
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex -= 1;

   // And swap it with the current element.
   temporaryValue = array[currentIndex];
   array[currentIndex] = array[randomIndex];
   array[randomIndex] = temporaryValue;
 }

 return array;
}

function flipCard(){
  if (firstCard) {

    secondCard=$(this)
    secondCard.removeClass("cardFaceDown");

    if (firstCard.css("background-image") === secondCard.css("background-image")) {

      firstCard.addClass("correct")
      secondCard.addClass("correct");

    }else{
      firstCard = null;
      secondCard = null;

      setTimeout(wrong,700);


    }

  } else {
    firstCard = $(this)
    firstCard.removeClass("cardFaceDown");
    }

}
function wrong(){
 $(".card:not(.correct)").addClass("cardFaceDown")
  console.log("rong");
}
