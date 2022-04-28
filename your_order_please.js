function order(words){
  let newOrder = words.split("").filter(a => a.match(/([0-9])/)).map(a => Number(a)-1);
  console.log(newOrder);
  let result = newOrder.map(a => words.split(" ")[a])
  console.log(result);
  return(result.join(" "));
}

// the above doesn't work because it is merely taking the index in the order in which its given
// means if its passed [1,0,2] it doesn't reorder to [0,1,2], instead takes 1 first, then 0, then 2 index of the starting array



function order(words){
  let newOrder = words.split("").filter(a => a.match(/([0-9])/)).map(a => Number(a)-1);
  console.log(newOrder);
  let result = [];
  for( let i = 0 ; i < newOrder.length ; i++ ){
   //result[i]=words.split(" ")[newOrder[i]]
    result[i]=words.split(" ")[newOrder.indexOf(i)]
  }
  console.log(result);
  return(result.join(" "));
}



// other solutions

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
