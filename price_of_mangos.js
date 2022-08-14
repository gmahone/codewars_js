function mango(quantity, price){
  console.log(quantity, price);
  let result1 = quantity % 3 * price;
  let result2 = 2 * parseInt(quantity / 3) * price;
  return (result1 + result2);
}
