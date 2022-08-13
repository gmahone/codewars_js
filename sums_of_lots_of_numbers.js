function f(n){
  let result = Array(n).fill(1).map((e, i) => e + i).reduce((acc, c) => acc + c, 0);
  return result;
};
