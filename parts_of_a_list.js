//function partlist(arr) {
//    return arr.map((e,i,arr) => [arr.slice(0,i+1).join(" "), arr.slice(i+1).join(" ")])
//}


function partlist(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push([arr.slice(0,i+1).join(" "), arr.slice(i+1).join(" ")]);
    }
    return result;
}
