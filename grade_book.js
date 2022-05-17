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


// other solutions

// using else ifs
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}
