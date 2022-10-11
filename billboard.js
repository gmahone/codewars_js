function billboard(name, price = 30){
  let totalPrice = 0;
  for(let i = 0; i < name.length; i++){
    totalPrice += price;
  }
  return(totalPrice);
} 


// using reduce
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}
