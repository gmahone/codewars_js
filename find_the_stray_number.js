// input: Array of numbers
// output: Number that is not duplicated
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// if first index != last index, then the item is duplicated.
// if the first index == the last index, then the item is not duplicated.

// working example
let test1 = [1, 1, 2, 1, 1, 1, 1];
test1.filter((a,i,arr) => arr.indexOf(a) === arr.lastIndexOf(a));
// need to unbox the return array


function stray(numbers) {
  let [result] = numbers.filter((a,i,arr) => arr.indexOf(a) === arr.lastIndexOf(a))
  return(result);
}


// other solutions

// loop solution
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}


// bitwise solution
const stray = nums => nums.reduce((a, b) => a ^ b);

// max min solution
function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}
