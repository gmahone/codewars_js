function roundToNext5(n){
  return n % 5 ? (Math.floor( n/5 ) + 1) * 5 : n
}


// other solutions
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}

const roundToNext5 = n => Math.ceil(n / 5) * 5;

function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}
