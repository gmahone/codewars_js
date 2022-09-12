function balancedNum(number){
    let numberArray = number.toString().split("").map(e => Number(e));
    let balanced = numberArray.slice(0,Math.floor(numberArray.length/2)) === numberArray.reverse().slice(0,Math.floor(numberArray.length/2));
    return balanced ? "Balanced" : "Not balanced";
}
