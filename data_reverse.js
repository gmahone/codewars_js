function dataReverse(data) {
  let result = [];
  while(data.length){
    result.push(data.slice(0,8));
    data = data.slice(8)
  }
  return result.reverse().flat()
}


// with index jumping and unshift
