function highAndLow(numbers){
  const numbersSplit = numbers.split(" ").map( a => Number(a));
  return( Math.max(...numbersSplit) + " " + Math.min(...numbersSplit));
}
