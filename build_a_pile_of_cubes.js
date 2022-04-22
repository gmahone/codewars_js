function findNb(m) {
  let result = -1, i = 1, loopVar = true, buildingVolume = 0;
  while(loopVar){
    buildingVolume += i**3
    if(buildingVolume > m){
      loopVar = false;
    }
    if(buildingVolume === m){
      loopVar = false;
      result = i;
    }
    i += 1
  }
  return(result);
}
