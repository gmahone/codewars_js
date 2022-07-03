function pipeFix(numbers){
  arrayLength = numbers[numbers.length-1] - numbers[0] + 1;
  resultArray = new Array(arrayLength).fill(numbers[0]).map((e,i) => e + i);
  return resultArray;
}
