// Code your solution in this file!
// let street = 32
function distanceFromHqInBlocks(street) {
  const blocks = 42;
  return Math.abs(street - blocks);
}

console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(street) {
  const eachBlockFeet = 264;
  return eachBlockFeet * distanceFromHqInBlocks(street);
}

console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
  const eachBlockFeet = 264;
  return Math.abs(start - destination) * eachBlockFeet;
}

console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
  const eachBlockFeet = 264;
  const distance = Math.max(Math.abs(start - destination) * eachBlockFeet, 0);
  const totalFeet = Math.max(distance - 400, 0);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return totalFeet * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(43, 44));
