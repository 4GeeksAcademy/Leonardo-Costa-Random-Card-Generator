var timerInterval;
var generateButton = document.getElementById("generateButton");
var intervalDropdownItems = document.querySelectorAll(".dropdown-item");

intervalDropdownItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var interval = parseInt(this.getAttribute("data-interval"));
    startTimer(interval);
  });
});

generateButton.addEventListener("click", function() {
  clearInterval(timerInterval);
  generateCard();
});

function startTimer(interval) {
  clearInterval(timerInterval);
  if (interval !== 0) {
    timerInterval = setInterval(generateCard, interval);
  }
}
function generateCard() {
  var cards = [
    "src/2_of_clubs.png",
    "src/3_of_diamonds.png",
    "src/ace_of_spades.png",
    "src/black_joker.png",
    "src/jack_of_clubs.png",
    "src/king_of_diamonds.png",
    "src/queen_of_hearts.png",
    "src/red_joker.png",
    "src/9_of_hearts.png",
    "src/10_of_spades.png",
    "src/7_of_clubs.png"
  ];

  var randomIndex = Math.floor(Math.random() * cards.length);
  var randomCard = cards[randomIndex];

  var cardContainer = document.getElementById("cardContainer");

  // Remove the existing card if present
  if (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  var cardImage = document.createElement("img");
  cardImage.src = randomCard;
  cardContainer.appendChild(cardImage);
}
