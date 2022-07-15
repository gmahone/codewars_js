function vowelIndices(word){
  return word
    .toLowerCase()
    .split("")
    .map((e,i) => e.match(/[aeiouy]/) ? i+1 : null)
    .filter(e => e != null);
}

// loop solution
function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeiouy]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}
