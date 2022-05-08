const reverseSeq = n => {
  return(Array(n).fill(1).map((a,i) => a + i).reverse());
};


// normal function version
function reverseSeq(n){
  let result = Array(n).fill(1).map((a,i) => a + i).reverse();
  return(result);
};



// loop solution
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};


const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};
