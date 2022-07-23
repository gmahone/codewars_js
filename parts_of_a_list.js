function partlist(arr) {
    return arr.map((e,i,arr) => [arr.slice(0,i+1).join(" "), arr.slice(i+1).join(" ")])
}
