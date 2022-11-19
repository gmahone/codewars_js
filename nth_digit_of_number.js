var findDigit = function(num, nth){
    if(nth <= 0){
      return(-1);
    }
    let numAsString = String(Math.abs(num));
    let newIndex = numAsString.length - nth
    if(newIndex < 0){
      return(0);
    } else {
      let result = Number(numAsString.substring(newIndex, newIndex+1))
      return(result);
    }
    return("");
}


// add math solution
var findDigit = function(num, nth){
    if(nth <= 0){
      return(-1);
    }
    var x = Math.abs(num);
    for (var i=1; i < nth; i++){
      x = Math.floor(x/10);
    }
    return(x % 10);
}
