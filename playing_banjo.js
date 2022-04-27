function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo` ;
}

// arrow function version
const areYouPlayingBanjo = name => name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo` ;


// other solution
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}


// regex solution
function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}
