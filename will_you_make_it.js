const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return(mpg*fuelLeft >= distanceToPump ? true : false);
};


// arrow function version
const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
