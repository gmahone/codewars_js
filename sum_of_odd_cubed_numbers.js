function cubeOdd(arr) {
  if(arr.length !== arr.filter(e => Number.isInteger(e)).length){
    return(undefined);
  };
  let result = arr.map(e => e**3)
    .filter(e => e & 1)
    .reduce((acc,e) => acc + e);
  console.log(result);
  return result;
}
