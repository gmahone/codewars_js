function mango(quantity, price){
  let result1 = quantity % 3 * price;
  let result2 = 2 * parseInt(quantity / 3) * price;
  return (result1 + result2);
}


// solution with cleaner math
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}
