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
