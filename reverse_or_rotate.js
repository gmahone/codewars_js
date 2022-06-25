function revrot(str, sz) {
    let resultArray = []
    if(sz === 0 || sz > str.length){
        return "";
    }
    let loopLength = Math.floor(str.length / sz);
    console.log(str.length, sz, loopLength)
    let tempStr;
    for(let i = 0; i < loopLength; i++){
        tempStr = str.substring(0, sz).split("").map(a => Number(a));
        str = str.substring(sz);
        if(Number(tempStr.reduce((acc,c) => acc + c**3)) % 2 === 0){
            resultArray.push(tempStr.reverse().join(""));
        } else {
            tempStr.push(tempStr.shift());
            resultArray.push(tempStr.join(""));
        }
    }
    return resultArray.join("");
}


// other solutions

// split into functions
function sumOfCubes(string){
  return string.split("").map(a => Number(a) ** 3).reduce((acc,c) => acc + c);
}

function revrotEach(string){
  if(sumOfCubes(string) % 2 === 0){
    return string.split("").reverse().join("");
  }
  else{
    return string.slice(1) + string.slice(0,1);
  }
}

function revrot(str, sz) {
  if(sz === 0 || str.length < sz){
    return "";
  }
  else{
    var arr = [];
    for(var c = 0; c < str.length; c+=sz){
      arr.push(str.slice(c,c+sz));
    }
    return arr.filter(a => a.length === sz).map(a => revrotEach(a)).join('');
  }
}


// regex solution
function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}
