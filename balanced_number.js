function balancedNum(number){
    let numberArray = number.toString().split("").map(e => Number(e));
    let balanced = numberArray
        .slice(0,Math.floor((numberArray.length-1)/2))
        .reduce((acc,c) => acc + c, 0) == 
      numberArray
        .reverse()
        .slice(0,Math.floor((numberArray.length-1)/2))
        .reduce((acc,c) => acc + c, 0);
    return balanced ? "Balanced" : "Not Balanced";
}
