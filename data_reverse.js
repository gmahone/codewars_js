function dataReverse(data) {
  let result = [];
  while(data.length){
    result.push(data.slice(0,8));
    data = data.slice(8)
  }
  console.log(result.reverse())
}
