// doesn't work
console.log("hello".split("").map((element, index, array) => {array.splice(index, 1, element.toUpperCase()); return(array.join(""));}))



// working solution
console.log("hello".split("").map((element, index, array) => array.map((el, ind) => index == ind ? el.toUpperCase() : el).join("")))



// solution that handles spaces " "
function wave(str){
  const result = str.split("").map((element, index, array) => element == " " ? " " : array.map((el, ind) => index == ind ? el.toUpperCase() : el).join("")).filter(a => a != " ");
  return(result);
}
