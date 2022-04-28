function order(words){
  let newOrder = words.split("").filter(a => a.match(/([0-9])/));
  let result = newOrder.map(a => words.split(" ")[a-1])
  return(result.join(" "));
}
