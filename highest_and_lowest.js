function highAndLow(numbers){
  const numbersSplit = numbers.split(" ").map( a => Number(a));
  return( Math.max(...numbersSplit) + " " + Math.min(...numbersSplit));
}

// add other solutions

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}
