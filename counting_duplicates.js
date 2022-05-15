// Parameters - a text string containing letters and numbers
// Return - should return an integer for how many letters and numbers have duplicates
// Exceptions - the input will be only alphanumeric, but may have upper and lower case letters and this should be controlled
// Pseudocode:
//   - Convert all to upper or lower case ( I choose upper)
//   - Split input into array
//   - Sort array
//   - Loop through array
//   - Take value at current index
//   - Compare current value index with .lastIndexOf
//   - If not the same, add one to duplicate count and set index value to .lastIndexOf value + 1
//   - return duplicate count
function duplicateCount(text){
  let textArray = text.toUpperCase().split("").sort();
  let duplicateCount;
  for(let i = 0; i < textArray.length; i++){
    let currentValue = textArray[i];
    let lastIndex = textArray.lastIndexOf(currentValue);
    if(i !== lastIndex){
      duplicateCount++;
      i = lastIndex + 1;
    }
  }
  return(duplicateCount);
}
