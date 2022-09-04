function divCon(x){
  let stringArraySum = x.filter((e) => typeof(e) == "string").reduce((acc,c) => acc + c, 0);
  let numberArray = x.filter((e) => typeof(e) != "string")
  console.log(x, stringArraySum, numberArray);
  
  return "";
}
