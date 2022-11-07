function cubeOdd(arr) {
  if(arr.length !== arr.filter(e => Number.isInteger(e)).length){
    return(undefined);
  };
  console.log(arr)
  let result = arr.map(e => e**3)
    .filter(e => e & 1)
  console.log(result)

  console.log(result)
  result = result.reduce((acc,e) => acc + e, 0);
  console.log(result)
  return result;
}
