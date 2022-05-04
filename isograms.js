const isIsogram = str => str.toUpperCase().split("").sort().filter((a,i,arr) => a === arr[i-1]).length ? false : true;
