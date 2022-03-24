function openOrSenior(data){
  let out = [];
  for(i = 0; i < data.length; i++){
    if(data[i][0] >= 55 & data[i][1] > 7){
      out.push("Senior");
    } else {
      out.push("Open");
    }
  }
  return out;
}
