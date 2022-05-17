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


// other solutions

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}


// split into arrow functions
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
  return [...this].map(swapCase).join('');
};

// add regex solution
String.prototype.toAlternatingCase = function () {
  return this.replace(/./g, function (match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  });
}
