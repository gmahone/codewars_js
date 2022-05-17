String.prototype.toAlternatingCase = function () {
  let result = this.split("").map(a => {
    if(a.charCodeAt() >= 60 && a.charCodeAt() <= 90){
      return(a.toLowerCase());
    } else {
      return(a.toUpperCase());
    }
  }).join("")
  return(result);
}
