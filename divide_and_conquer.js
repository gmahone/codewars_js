function divCon(x){
  let stringArraySum = x.filter((e) => typeof(e) == "string").reduce((acc,c) => acc + +c, 0);
  let numberArraySum = x.filter((e) => typeof(e) != "string").reduce((acc,c) => acc + c, 0);
  
  return numberArraySum - stringArraySum;
}
