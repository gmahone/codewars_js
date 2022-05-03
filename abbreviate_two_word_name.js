const abbrevName = name => name.split(" ").map(a => a[0].toUpperCase()).join(".");


// other solutions

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
