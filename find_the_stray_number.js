// input: Array of numbers
// output: Number that is not duplicated
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// if first index != last index, then the item is duplicated.
// if the first index == the last index, then the item is not duplicated.

// working example
let test1 = [1, 1, 2, 1, 1, 1, 1];
test1.filter((a,i,arr) => arr.indexOf(a) === arr.lastIndexOf(a));
