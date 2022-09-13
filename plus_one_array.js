function upArray(arr){
  let testArray = arr.filter(e => e >= 0 && e <= 9)
  if(testArray.length != arr.length){
    return null;
  }
  let arrayAsNumber = Number(arr.map(e => String(e)).join(""))
  let resultArray = String(arrayAsNumber + 1).split("").map(e => Number(e));
  return resultArray;
}
