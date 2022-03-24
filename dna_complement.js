function DNAStrand(dna){
  dna = dna.replace(/G/g, "c");
  dna = dna.replace(/C/g, "g");
  dna = dna.replace(/T/g, "a");
  dna = dna.replace(/A/g, "t");
  return dna.toUpperCase();
}

// add other solutions
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}
DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
