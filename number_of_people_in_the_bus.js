var number = function(busStops){
  return busStops.reduce((acc, c) => acc + c[0] - c[1], 0);
}


// arrow function version
const number = busStops => busStops.reduce((acc, c) => acc + c[0] - c[1], 0);

// other solutions
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
// can directly create the array variables like above



// for loop solution
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
