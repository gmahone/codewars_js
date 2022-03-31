function smallEnough(array, limit){
    return ![...array].map( (a) => a < limit ).includes(false)
}

const smallEnough = (a, limit) => ![...a].map( a => a <= limit).includes(false);


// other solutions

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

smallEnough = (a, l) => a.every(e => e <= l)

const smallEnough = ($, limit) => $.every(el => el <= limit)

function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}

const smallEnough = (array, limit) => !array.some(n => n > limit);
