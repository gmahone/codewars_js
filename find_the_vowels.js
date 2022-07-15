function vowelIndices(word){
  return word
    .split("")
    .map((e,i) => e.match(/[aeiou]/) ? i+1 : null)
    .filter(e => e != null);
}
