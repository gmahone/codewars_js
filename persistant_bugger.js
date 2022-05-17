function persistence(num) {
  let i = 0;
  while(true){
     if(String(num).length === 1){
       return(i);
     }
     num = String(num).split("").reduce((acc,c) => Number(acc) * c);
     i++;
  }
  return(null);
}
