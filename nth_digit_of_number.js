var findDigit = function(num, nth){
    let numAsString = String(Math.abs(num));
    let newIndex = numAsString.length - nth
    if(newIndex < 0 || nth < 0){
      return(0);
    } else {
      let result = Number(numAsString.substring(newIndex, newIndex+1))
      return(result);
    }
    return("");
}
