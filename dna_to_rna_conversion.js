function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U");
}

const DNAtoRNA = dna => dna.replaceAll("T", "U");

//replaceAll not available for nodeJS v14.x
// so a little longer solution
const DNAtoRNA = dna => dna.split("").map(a => a.replace("T", "U")).join("");


// other solutions
// regex solution
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

// split join solution
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}
