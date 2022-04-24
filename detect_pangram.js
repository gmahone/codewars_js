function isPangram(string){
  const testArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let currLetterIndex;
  let result = true;
  for(let i = 0; i < testArray.length; i++){
    currLetterIndex = string.indexOf(testArray[i]);
    if(currLetterIndex === -1){
      result = false;
    }
  }
  return(result);
}
