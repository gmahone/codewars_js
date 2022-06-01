function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result = 0;
  while(true){
    if ( ((dadYearsOld + result) / (sonYearsOld + result)) > 2 ) {
      result++;
    } else if ( ((dadYearsOld + result) / (sonYearsOld + result)) < 2 ) {
      result--;
    } else {
      break
    }
  }
  return Math.abs(result);
}
