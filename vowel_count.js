function getCount(str) {
  let vowelArray = "aeiou".split("");
  let result = vowelArray.reduce((acc,c) => acc + (str.split(c).length - 1), 0);
  return result;
}
