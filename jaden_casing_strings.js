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


// add other solutions

// nice solution using slice
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


// regex solution
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};


// simpler map and slice solution
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};
