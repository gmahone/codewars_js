function getGrade (s1, s2, s3) {
  let average = (s1+s2+s3)/3;
  let result = "F";
  if(average >= 60){
    result = "D";
  }
  if(average >= 70){
    result = "C";
  }
  if(average >= 80){
    result = "B";
  }
  if(average >= 90){
    result = "A";
  }
  return(result);
}
