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


// other solutions

// a count down version
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}

// simplified
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

