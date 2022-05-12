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
