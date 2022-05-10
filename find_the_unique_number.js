function findUniq(arr) {
  let sortArr = arr.sort();
  return(sortArr[0]===sortArr[1] ? sortArr[arr.length - 1] : sortArr[0]);
}
