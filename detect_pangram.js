function isPangram(string){
  const testArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let currLetterIndex;
  let result = true;
  for(let i = 0; i < testArray.length; i++){
    currLetterIndex = string.toLowerCase().indexOf(testArray[i]);
    if(currLetterIndex === -1){
      result = false;
    }
  }
  return(result);
}


// other solutions

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
