function getSum( a,b ){
  if(a === b){
    return a;
  }
  arr = [a,b];
  arr.sort((a,b) => a - b);
  out = arr[0];
  for(i = 1; i <= (arr[1] - arr[0]); i++){
    out += (arr[0] + i);
  }
  return out
}

// other solutions

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

function GetSum( a,b )
{
  tmp = 0;
  
  if(a < b)
    while(a <= b) tmp += a++;
  else
    while(a >= b) tmp += a--;
      
  return tmp;
}


function GetSum( a,b ) {
   var result = 0;
   var bigger = a > b ? a : b;
   var smaller = a > b ? b : a;
   for (var i = smaller; i <= bigger; i++) { result += i }
   return result
}
