String.prototype.toJadenCase = function () {
  let splitStr = this.split(" ");
  let result = [];
  for(let i = 0; i < splitStr.length; i++){
    let tmpWord = splitStr[i].split("");
    tmpWord[0] = tmpWord[0].toUpperCase();
    result.push(tmpWord.join(""));
  }
  return(result.join(" "));
};
