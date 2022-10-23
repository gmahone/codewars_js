function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1];
  for(let i = 0; i < (array.length-1); i++){
    let tmpProduct = array[i] * array[i+1];
    if(tmpProduct > maxProduct){
      maxProduct = tmpProduct;
    }
  }
  return(maxProduct);
}
