function twoSum(numbers, target) {
  let newMap = {};
  for(let i = 0; i < numbers.length; i++){
    let targetDiff = target - numbers[i];
    if(newMap.hasOwnProperty(targetDiff)){
      return([newMap[targetDiff], i]);
    }
    newMap[numbers[i]] = i;
  }
  return([]);
}


// other solutions

// lazy double loop solution
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


// single+ loop with hash table
function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function(a, i){ hash[a] = i; })
  
  for (var i = 0; i < numbers.length; i++){
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
}
