// the input is an array of numbers
//  - the array may contain both even and odd numbers
//  - odd numbers should be ordered ascending
//  - even numbers should be left in place
// an array with ordered odds and in place evens should then be returned
// examples: 
//  - [7, 1]  ->  [1, 7]
//  - [5, 8, 6, 3, 4]  ->  [3, 8, 6, 5, 4]
//  - [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// pseudocode
//  while TRUE
//   loop through array
//   if odd
//    test if current is smaller than previous
//    if true
//     swap current with previous
//     restart loop
//   if reaches the end with no swap
//    break while
//  return resorted array

// this does not work as is
function sortArray(array) {
  let currentOdd;
  let previousIndex = 0;
  let previousValue;
  let currentIndex = 0;
  let currentValue;
  while(true){
    if(currentIndex === array.length){
      break
    }
    if(array[currentIndex] & 0x1 && array[currentIndex] < array[previousIndex]){
      previousValue = array[previousIndex]
      currentValue = array[currentIndex]
      array.splice(previousIndex, 0, currentValue);
      array.splice(currentIndex, 0, previousValue);
      previousIndex = 0;
      currentIndex = 0;
    } else if(array[currentIndex] & 0x1){
      previousIndex = currentIndex;
    } else {
      currentIndex += 1;
    }
  }
  return(array);
}


// a new approach
// pseudocode:
//  filter the odd values from array
//  filter the odd value indices from array
//  loop over sorted odd value array length
//   for each item, splice odd value into array at current odd value index
//  return array
function sortArray(array) {
  let oddValues = array.filter(a => a & 0x1)
  let insertAt;
  oddValues.sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++){
    if(array[i] & 0x1){
      array.splice(i, 1, oddValues.shift())
    }
  }
  return array;
}
