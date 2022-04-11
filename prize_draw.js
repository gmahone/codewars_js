function prizeDraw(st, we, n){
    let rankArray = [];
    let result;
    st = st.split(",");
    for(i = 0; i < st.length; i++){
        rankArray.push({name : st[i], 
            rank : (st[i].length + st[i].toUpperCase().split("").map(a => a.charCodeAt()-64).reduce((acc,c)=>acc + c)) * we[i]});
    }
    rankArray.sort((a,b) => b.rank - a.rank);
    //console.log(rankArray)
    result = rankArray.filter(a => a.rank === rankArray[n-1].rank);
    //console.log(result)
    return(result[0].name)
}

let test = prizeDraw(st = "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", we = [1, 4, 4, 5, 2, 1], n=4)
