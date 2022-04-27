function findNextSquare(sq) {
  return Number.isInteger(sq**0.5) ? ((sq**0.5)+1)**2 : -1;
}


// arrow function version

const findNextSquare = sq => Number.isInteger(sq**0.5) ? ((sq**0.5)+1)**2 : -1;
