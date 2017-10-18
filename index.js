// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
  return Math.abs(distance - 42)
}

function distanceFromHqInFeet (distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  distanceTravelledInFeet(start, end)
  switch(fare) {
    case distance > 400 && distance <= 2000:
    return  0.02 * distance
    break
    case distance > 2000 && distance < 2500:
    return 25
    break
    case distance > 2500
    return 'cannot travel that far'
    
  }
}
