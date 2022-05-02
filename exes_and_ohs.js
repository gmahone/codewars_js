function XO(str) {
  let oNumber = str.split("").filter(a => a.toLowerCase() === "o").length;
  let xNumber = str.split("").filter(a => a.toLowerCase() === "x").length;
  return(oNumber == xNumber ? true : false);
}

// console.log(XO("ooxx"));
