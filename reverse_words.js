// possible solution without regex
// string.split(" ").trim() then loop over, and .replace array item with reversed item
// using regex, can avoid trim with "this is a  test".split(/\s+/)

function reverseWords(str) {
  let splitWords = str.split(" ").map(a => a.trim());
  for(let i = 0; i < splitWords.length; i++){
    str = str.replace(splitWords[i], splitWords[i].split("").reverse().join(""));
  }
  return str;
}
// the solution above is fine without a mirrored pair but fails on "stressed desserts"
// need to find a new solution
//  a solution using charCodeAt for the space character code (32)
// pseudocode:
//  loop over length of string
//   check for space
//   check for within word
//   if no space and no within word
//    set within word as true
//    save index value for word beginning
//   else if space and is within word
//    save index value - 1 for word end
//    splice array and reverse to result string
//   else
//    next
//  return result string
