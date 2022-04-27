function findNextSquare(sq) {
  return Number.isInteger(sq**0.5) ? ((sq**0.5)+1)**2 : -1;
}


// arrow function version

const findNextSquare = sq => Number.isInteger(sq**0.5) ? ((sq**0.5)+1)**2 : -1;


// other solution with mod
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
