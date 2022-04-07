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

// other solutions

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));


function findEvenIndex(arr)
{
  function sum(arr){
    return arr.reduce(function(a,b){return a+b;},0);
  }

  return arr.findIndex(function(el,i,arr){
    return sum(arr.slice(0, i)) === sum(arr.slice(i+1,arr.length));
  });
}


function findEvenIndex(arr)
{
  return arr.findIndex((e,i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
}
