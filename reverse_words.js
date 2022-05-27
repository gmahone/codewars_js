// possible solution without regex
// string.split(" ").trim() then loop over, and .replace array item with reversed item
// using regex, can avoid trim with "this is a  test".split(/\s+/)

function reverseWords(str) {
  return str.split(" ").trim();
}
