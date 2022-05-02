var summation = function (num) {
  return new Array(num).fill(0).map((v, i) => i + 1).reduce((acc,c) => acc + c);
}
