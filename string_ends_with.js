function solution(str, ending){
  return str.substring(str.length - ending.length).includes(ending);
}


// other solutions

function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);

function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}
