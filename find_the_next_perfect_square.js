function findNextSquare(sq) {
  return Number.isInteger(sq**0.5) ? ((sq**0.5)+1)**2 : -1;
}

