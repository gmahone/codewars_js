function expandedForm(num) {
  let numSplit = num.toString().split("");
  let result = [];
  for(let i = 0; i < numSplit.length; i++){
    if(numSplit[i] != 0){
      result.push(numSplit[i].padEnd(numSplit.length - i, "0"));
    }
  }
  return(result.join(" + "));
}
