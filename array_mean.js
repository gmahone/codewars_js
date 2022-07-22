var findAverage = function (nums) {
  return nums.reduce((acc,c) => acc + c, 0)/nums.length;
}


// arrow function version
const findAverage = nums => nums.reduce((acc, c) => acc + c, 0) / nums.length;
