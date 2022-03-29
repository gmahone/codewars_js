function SeriesSum(n){
  return n === 0 ? "0.00": Array(n)
      .fill()
      .map( (element, index) => 1/(3*index+1) )
      .reduce( (acc, c) => acc + c)
      .toFixed(2)
      .toString()
}
