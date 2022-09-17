function numberToPower(number, power){
  result new Array(power).fill(number).reduce((acc,c) => acc * c, 1);
}
