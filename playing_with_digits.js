// submitted version
function digPow(n, p){
    let tmp = n.toString().split("").map((a,b) => Number(a)**(p+b)).reduce((acc,c) => acc + c);
    if(tmp % n == 0){
        return(tmp / n);
    } else {
        return(-1);
    }
}
