// input will be a string that contains numbers (could have padded zeros) 
// the input string should be returned incremented by 1
//  - the number at the right end should be increased by 1
//  - if padded by zeros, this should be the same in output
//  - if there is no number in the input, a 1 should be appended
// examples:
//  - foo -> foo1
//  - foobar23 -> foobar24
//  - foo0042 -> foo0043
// pseudocode:
//  first loop over string
//  for i..n in string
//   check if/where the first number is
//   if no number:
//    return string + 1
//   else is number:
//    find out if string is padded
//    if converted number length equals string number length
//     return string + (number as number + 1)
//    else string number is padded
//     return string + (padded number + 1)
