// input should be an integer that indicates the max width of the diamond
// return is the diamond itself
// example:
// 5 ->
//   *
//  ***
// *****
//  ***
//   *
// pseudocode
//  input integer (n) indicates also the number of lines
//  loop i from 1...n
//   determine space padding with max(i, (n-1)/i) - min(i, (n-1)/i)
//   determine the number of asterisks with ((n-1)/2) - n % i)
//   draw the current line
