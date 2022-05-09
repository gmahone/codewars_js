function solution(string) {
  let arrayString = string.split("");
  let result = [];
  for(let i = 0; i < arrayString.length; i++){
    let currString = arrayString[i];
    console.log(currString)
    if(currString === currString.toUpperCase()){
      currString = " " + currString;
    };
    result.push(currString);
  };
  return(result.join(""));
};

// other solutions

// regex solution
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}


// non-loop solution
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
