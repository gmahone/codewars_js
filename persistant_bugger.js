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

// other solutions

// clearer solution
function persistence(num) {
   let times = 0;
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return(times);
}
