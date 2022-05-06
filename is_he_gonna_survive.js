function hero(bullets, dragons){
  return(bullets >= dragons*2 ? true : false);
}


// arrow function solution
const hero = (bullets, dragons) => bullets >= dragons*2 ? true : false;


// other solutions

// simplified
function hero(bullets, dragons){
  return bullets >= dragons * 2
}


// simplified arrow function solution
const hero = (bullets, dragons) => dragons * 2 <= bullets;
