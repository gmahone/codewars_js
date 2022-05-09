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

