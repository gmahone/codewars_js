function comp(a, b){
    let a2 = a.sort( (a,b) => a - b).map( a => a**2);
    b.sort( (a,b) => a - b);
    
    for(i = 0; i < a2.length; i++){
        if(a2[i] != b[i]){
            return false;
        }
    }
    return true;
}
