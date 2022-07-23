function partlist(arr) {
    return arr.map((e,i,arr) => [e, arr.slice(i+1).join(" ")])
}
