function sumDigits(number) {
  return String(Math.abs(number)).split("").reduce((acc,c) => acc + +c, 0);
}

