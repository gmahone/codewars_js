function divCon(x){
  let stringArray = x.filter((e) => typeof(e) == "string")
  let numberArray = x.filter((e) => typeof(e) != "string")
  console.log(x, stringArray, numberArray);
  
  return "";
}
