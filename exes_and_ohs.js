function XO(string){
  let oNumber = string.split("").filter(a => a.toLowerCase() === "o").length;
  let xNumber = string.split("").filter(a => a.toLowerCase() === "x").length;
  return(oNumber == xNumber ? true : false);
}

// console.log(XO("ooxx"));
