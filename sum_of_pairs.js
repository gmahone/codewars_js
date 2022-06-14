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
