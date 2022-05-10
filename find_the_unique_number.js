function findUniq(arr) {
  let sortArr = arr.sort();
  return(sortArr[0]===sortArr[1] ? sortArr[arr.length - 1] : sortArr[0]);
}


// other solutions

// similar sort solution but using pop()
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}


// solution using index comparison
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
