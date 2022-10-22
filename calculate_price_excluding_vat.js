function excludingVatPrice(price){
  if(price === null){
    return(-1);
  }
  let priceWithoutVat = price / 1.15
  priceWithoutVat = Math.round(priceWithoutVat * 100)/100
  return(priceWithoutVat);
}


// arrow function ternary
excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);


// normal solution ternary
function excludingVatPrice(price) {
  return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
}
