function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// arrow function
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// different variable use
function animal({name, legs, color}) {
  return `This ${color} ${name} has ${legs} legs.`;
}
