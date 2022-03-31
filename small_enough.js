function smallEnough(array, limit){
    return ![...array].map( (a) => a < limit ).includes(false)
}

const smallEnough = (a, limit) => ![...a].map( a => a <= limit).includes(false);
