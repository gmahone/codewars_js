function divCon(x){
  let stringArraySum = x.filter((e) => typeof(e) == "string").reduce((acc,c) => acc + +c, 0);
  let numberArraySum = x.filter((e) => typeof(e) != "string").reduce((acc,c) => acc + c, 0);
  
  return numberArraySum - stringArraySum;
}


// one line solution via ternary
function divCon(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}
