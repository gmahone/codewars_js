const isIsogram = str => str.toUpperCase().split("").sort().filter((a,i,arr) => a === arr[i-1]).length ? false : true;


// other solutions

// solution using Set
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}


// regex solution
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

// other regex solution
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}


// double loop solution
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}


// solution using indexOf
function isIsogram(str) {
  return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}
