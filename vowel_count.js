function getCount(str) {
  let vowelArray = "aeiou".split("");
  let result = vowelArray.reduce((acc,c) => acc + (str.split(c).length - 1), 0);
  return result;
}

// other solutions

// regex solution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

// using filter includes
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
