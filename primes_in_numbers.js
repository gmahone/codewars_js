// remainder = n
// while remainder != 1
//  loop i from 1:n
//  test if i is prime
//   if prime, see if remainder % i == 0
//    if remainder % i == 0
//     add i to array
//     remainder /= i
// sort array
// loop over array, crunching the same numbers and creating output string
function isPrime(x){
    let isPrime = true
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime
}


function primeFactors(n){
    let divArray = []
    let i, j, stillPrime
    while(n != 1){
        for(i = 2; i < n+1; i++){
            if(n % i == 0 && isPrime(i)){
                divArray.push(i)
                n /= i;
            }
        }
    }
    divArray.sort
    console.log(divArray)
    return divArray
}
