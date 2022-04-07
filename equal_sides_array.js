function findEvenIndex(arr){
    let arrRight = arr.reduce( (acc, c) => acc + c);
    let arrLeft = 0;
    let result = -1;
    for(let i = 0; i < arr.length; i++){
        arrRight -= arr[i];
        if(arrLeft === arrRight){
            result = i;
            return result;
        } else {
            arrLeft += arr[i];
        }
    }
    return result;
}
