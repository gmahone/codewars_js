var number = function(busStops){
  return busStops.reduce((acc, c) => acc + c[0] - c[1], 0)
}
