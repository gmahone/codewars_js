function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}


// via string addition
function sayHello( name, city, state ) {
  return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}


// arrow function
const sayHello = ( name, city, state ) => `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
