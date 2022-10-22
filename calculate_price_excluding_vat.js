function excludingVatPrice(price){
  if(price === null){
    return(-1);
  }
  console.log(price)
  let priceWithoutVat = price / 1.15
  console.log(priceWithoutVat)
  priceWithoutVat = Math.round(priceWithoutVat * 100)/100
  console.log(priceWithoutVat)
  return priceWithoutVat;
}
