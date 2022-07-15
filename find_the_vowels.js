function vowelIndices(word){
  return word
    .toLowerCase()
    .split("")
    .map((e,i) => e.match(/[aeiou]/) ? i+1 : null)
    .filter(e => e != null);
}
