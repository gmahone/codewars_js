function sumPairs(ints, s) {
  let pairMap = {};
  for(let i = 0; i < ints.length; i++){
    let currDiff = s - ints[i];
    if(pairMap.hasOwnProperty(currDiff)){
      return(s - currDiff, currDiff)
    }
    currMap[ints[i]] = i
  }
}
