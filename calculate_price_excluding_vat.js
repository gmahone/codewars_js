function excludingVatPrice(price){
  console.log(price)
  let priceWithoutVat = price / 1.15
  console.log(priceWithoutVat)
  priceWithoutVat = Math.round(priceWithoutVat * 100)/100
  console.log(priceWithoutVat)
  return priceWithoutVat;
}
