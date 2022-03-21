function sumArray(array) {
    if(!array || array.length <= 1){
      return 0;
    }
    
    let min = array[0];
    let max = array[0];
    let sum = 0
    
    for(i = 0; i < array.length; i++){
      if(array[i] && array[i] < min){
        min = array[i];
      }
      if(array[i] && array[i] > max){
        max = array[i];
      }
      sum += (array[i] || 0);
    }
    return(sum - min - max);
  }
