function likes(names) {
  let result = " like this"
  if(names.length == 0){
    result = "no one likes this";
  } else if(names.length == 1){
    result = names[0] + " likes this";
  } else if(names.length == 2){
    result = names.join(" and ") + result;
  } else if(names.length == 3){
    result = names[0] + ", " + names[1] + " and " + names[2] + result
  } else {
    result = names[0] + ", " + names[1] + " and " + (names.length - 2) + " others" + result;
  }
  return result
}
