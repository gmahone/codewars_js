function countBy(x, n) {
  let z = [];
  let jump = x;
  for(let i = 0; i < n; i++){
    z.append(x);
    x += jump;
  return z;
}
