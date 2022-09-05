let suitDefinition = {
  9827: "clubs",
  9830: "diamonds",
  9829: "hearts",
  9824: "spades"
}

function defineSuit(card) {
  return suitDefinition[card.slice(-1).charCodeAt()];
}


// object contained in function
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}
