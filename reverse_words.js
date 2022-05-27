// possible solution without regex
// string.split(" ").trim() then loop over, and .replace array item with reversed item
// using regex, can avoid trim with "this is a  test".split(/\s+/)

function reverseWords(str) {
  let splitWords = str.split(" ").map(a => a.trim());
  console.log(splitWords);
}
