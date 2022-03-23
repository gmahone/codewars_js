function squareDigits(num){
  let out = "";
  let stringNum = String(num);
  for(i = 0; i < stringNum.length; i++){
    out += String(Math.pow(Number(stringNum[i]), 2));
  }
  return Number(out);
}


/* other solutions */
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  return parseInt(array.join(""));
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
