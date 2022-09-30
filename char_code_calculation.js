function calc(x){
  let charCodeArray = String(x).split("")
    .map(e => String(e.charCodeAt()))
    .join("")
    .replace("7", "1")
    .split("")
    .reduce((acc,c) => acc + +c, 0);
  console.log(charCodeArray);
  
  return "";
}
