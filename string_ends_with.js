function solution(str, ending){
  return str.substring(str.length - ending.length).includes(ending);
}
