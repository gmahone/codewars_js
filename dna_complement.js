function DNAStrand(dna){
  dna = dna.replace(/G/g, "c");
  dna = dna.replace(/C/g, "g");
  dna = dna.replace(/T/g, "a");
  dna = dna.replace(/A/g, "t");
  return dna.toUpperCase();
}
