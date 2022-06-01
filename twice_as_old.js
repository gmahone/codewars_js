function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result = 0;
  while(true){
    if ( dadYearsOld / sonYearsOld > 2 ) {
      result--;
    } else if ( dadYearsOld / sonYearsOld < 2 ) {
      result++;
    } else {
      break
    }
  }
  return result;
}
