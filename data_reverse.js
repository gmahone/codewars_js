function dataReverse(data) {
  let result = [];
  while(data.length){
    result.push(data.slice(0,8));
    data = data.slice(8)
  }
  return result.reverse().flat()
}


// with index jumping and unshift
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
