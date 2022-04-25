function betterThanAverage(classPoints, yourPoints) {
  const classSum = classPoints.reduce((acc, c) => acc + c, yourPoints);
  return yourPoints > (classSum/(classPoints.length+1)) ? true : false;
}



// other solutions

// don't need to include your score in the average
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

