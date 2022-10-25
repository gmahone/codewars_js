function grader(score) {
  let result = "F";
  if(score >= 0.6){
    result = "D";
  }
  if(score >= 0.7){
    result = "C";
  }
  if(score >= 0.8){
    result = "B";
  }
  if(score >= 0.9 && score <= 1.0){
    result = "A";
  }
  return(result);
}
