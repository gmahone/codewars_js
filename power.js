function numberToPower(number, power){
  return new Array(power).fill(number).reduce((acc,c) => acc * c, 1);
}
