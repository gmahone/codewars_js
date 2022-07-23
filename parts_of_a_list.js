//function partlist(arr) {
//    return arr.map((e,i,arr) => [arr.slice(0,i+1).join(" "), arr.slice(i+1).join(" ")])
//}


function partlist(arr) {
    let result = [];
    for(let i = 0; i < arr.length-1; i++){
        result.push([arr.slice(0,i+1).join(" "), arr.slice(i+1).join(" ")]);
    }
    return result;
}


function partlist(arr) {
    return arr.map((e, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);
}
