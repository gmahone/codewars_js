function betterThanAverage(classPoints, yourPoints) {
  const classSum = classPoints.reduce((acc, c) => acc + c, yourPoints);
  return yourPoints > (classSum/(classPoints.length+1)) ? true : false;
}
