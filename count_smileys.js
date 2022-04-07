function countSmileys(arr) {
  console.log(arr);
  if(arr.length === 0){
    return 0;
  } else {
    return arr.map( a => a.match(/^[;:]/) && a.match(/[)D]+$/) && !(a.match(/[o_]/)) && a.length<4 ? 1 : 0).reduce((acc,c) => acc + c)
  }
}
// my solution basically trial and error until I could pass all test :/


