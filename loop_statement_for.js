function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd,even];
}


// ternary array return solution
function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}
