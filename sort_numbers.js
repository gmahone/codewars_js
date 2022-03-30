function solution(nums){
  return nums ? nums.sort( (a,b) => a - b) : [];
}


// other solutions
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

let solution = (nums) => (nums || []).sort((a,b) => (a-b))

function solution(nums){
  return Array.isArray(nums) ? nums.sort(function(a, b) { return a - b; }) : [];
}
