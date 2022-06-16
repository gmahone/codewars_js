function dutyFree(normPrice, discount, hol){
  let discountPrice = normPrice * discount / 100
  let result = Math.floor( hol / discountPrice )
  return result;
}

// add other solutions

// simpler formulation
function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}
