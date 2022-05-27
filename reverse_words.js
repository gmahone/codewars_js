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
