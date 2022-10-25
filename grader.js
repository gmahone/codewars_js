function grader(score) {
  let result;
  if(score >= 0.6){
    result = "D";
  }
  if(score >= 0.7){
    result = "C";
  }
  if(score >= 0.8){
    result = "B";
  }
  if(score >= 0.9){
    result = "A";
  }
  if(score > 1.0 || score < 0.6){
    result = "F";
  }
  return(result);
}
