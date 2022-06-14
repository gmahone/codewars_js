function sumPairs(ints, s) {
  let pairMap = {};
  for(let i = 0; i < ints.length; i++){
    let currDiff = s - ints[i];
    if(pairMap.hasOwnProperty(currDiff)){
      return([currDiff, s - currDiff])
    }
    pairMap[ints[i]] = i
  }
}

// other solutions

// similar solution
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

// solution using Set
function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}
