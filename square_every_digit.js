function squareDigits(num){
  let out = "";
  let stringNum = String(num);
  for(i = 0; i < stringNum.length; i++){
    out += String(Math.pow(Number(stringNum[i]), 2));
  }
  return Number(out);
}
