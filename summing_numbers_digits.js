function sumDigits(number) {
  return String(Math.abs(number)).split("").reduce((acc,c) => acc + +c, 0);
}

function sumDigits(number) {
  return Math.abs(number).toString().split("").reduce((acc,c) => acc + +c, 0);
}
