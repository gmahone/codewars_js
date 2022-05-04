// doesn't work
console.log("hello".split("").map((element, index, array) => {array.splice(index, 1, element.toUpperCase()); return(array.join(""));}))
