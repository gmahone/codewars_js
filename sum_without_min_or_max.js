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



 /* other solutions */
  function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }


  function sumArray(array) {
    return Array.isArray(array) && array.length > 1
      ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
      : 0
  }

  const sumArray = (numbers) => (
    numbers && numbers.length > 1
      ? numbers
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, number) => sum + number, 0)
      : 0
  );
