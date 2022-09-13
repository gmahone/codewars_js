function upArray(arr){
  console.log(arr)
  let testArray = arr.filter(e => e >= 0 && e <= 9);
  if(testArray.length != arr.length || arr.length == 0){
    return null;
  }
  let arrayAsNumber = Number(arr.map(e => String(e)).join(""));
  let resultArray = String(arrayAsNumber + 1).split("").map(e => Number(e));
  return resultArray;
}


// solution for Big numbers -  requires >= node v10
function upArray(arr){
  console.log(arr)
  let testArray = arr.filter(e => e >= 0 && e <= 9);
  if(testArray.length != arr.length || arr.length == 0){
    return null;
  }
  let arrayAsNumber = BigInt(arr.map(e => String(e)).join(""));
  console.log(arrayAsNumber)
  let resultArray = String(arrayAsNumber + 1n).split("").map(e => Number(e));
  return resultArray;
}
