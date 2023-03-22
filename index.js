function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(hq - blocks);
  }
  
  function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }