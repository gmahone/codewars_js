function XO(str) {
  let oNumber = str.split("").filter(a => a.toLowerCase() === "o").length;
  let xNumber = str.split("").filter(a => a.toLowerCase() === "x").length;
  return(oNumber == xNumber ? true : false);
}

// console.log(XO("ooxx"));




// other solutions

// regex solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


// arrow function version
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


// interesting split solution
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
