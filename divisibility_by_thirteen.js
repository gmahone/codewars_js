// this attempt times out
function thirt(n){
    let multArray = [1,10,9,12,3,4,1]
    let prev_n = n;
    let loop = true;
    let split_n
    while(loop){
        split_n = prev_n.toString().split("").reverse().map( a => Number(a));
        for(let i = 0; i < split_n.length; i++){
            split_n[i] = split_n[i] * multArray[i];
        }
        split_n = split_n.reduce((acc,c) => acc + c);
        if(split_n !== prev_n){
            prev_n = split_n
        } else {
            loop = false;
        }
    }
    return split_n;
}
