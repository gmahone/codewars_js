// input parameters - an array of integers, can be positive or negative
// should return the maximal sum of a subarray of the input array
// example: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//       -> should return 6: [4, -1, 2, 1]


// -probably start with a double loop solution-
//
// assign result to 0
// loop i from 0...n
// loop j from n...i
// for each iteration:
//   slice array i-j
//   reduce slice to sum subarray
//   if the sum of subarray is > result
//     set result to sum of subarry
