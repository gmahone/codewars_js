function dutyFree(normPrice, discount, hol){
  let discountPrice = normPrice * discount / 100
  let result = Math.floor(hol / discountPrice )
  return result;
}
