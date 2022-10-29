function Hero (name = "Hero") {
  let hero = {name: name,
             position: "00",
             health: 100,
             damage: 5,
             experience: 0};
  return(hero);
}


// using this
function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
