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


// using includes
function defineSuit(card) {
if(card.includes('♥')) return 'hearts'
if(card.includes('♦')) return 'diamonds'
if(card.includes('♣')) return 'clubs'
if(card.includes('♠')) return 'spades' 
}
