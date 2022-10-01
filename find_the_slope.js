function slope(points){
  let deltaY = (points[3] - points[1]);
  let deltaX = (points[2] - points[0]);
  let result = "undefined";
  if(deltaX !== 0){
    result = String(deltaY/deltaX);
  }
  return(result);
}


// using isFinite
function slope([ x1, y1, x2, y2 ]) {
  let slope = (y2 - y1) / (x2 - x1);
  return Number.isFinite(slope) ? `${slope}` : 'undefined';
}
