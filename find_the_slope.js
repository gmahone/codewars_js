function slope(points){
  let deltaY = (points[3] - points[1]);
  console.log(deltaY);
  let deltaX = (points[2] - points[0]);
  console.log(deltaX);
  console.log(deltaY/deltaX);
  let result = "undefined";
  if(deltaX !== 0){
    result = String(deltaY/deltaX);
  }
  return(result);
}
