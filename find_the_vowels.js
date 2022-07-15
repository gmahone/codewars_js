function vowelIndices(word){
  return word.split("").filter(a => a.match([/aeiou/]));
}
