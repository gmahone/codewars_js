function vowelIndices(word){
  return word
    .toLowerCase()
    .split("")
    .map((e,i) => e.match(/[aeiouy]/) ? i+1 : null)
    .filter(e => e != null);
}
