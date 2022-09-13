function upArray(arr){
  let arrayAsNumber = Number(arr.map(e => String(e)).join(""))
  console.log(arrayAsNumber);
  let resultArray = String(arrayAsNumber + 1).split("").map(e => Number(e));
  console.log(resultArray);
  return result;
}
