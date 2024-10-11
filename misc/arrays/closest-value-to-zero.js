function computeClosestToZero(ts) {
  if (ts.length === 0) return 0;

  let closest = ts[0];

  for (let i = 0; i < ts.length; i++) {
    const temp = ts[i];
    if (temp === 0) {
      //if it's zero return it
      return 0;
    } else if (Math.abs(closest) === temp) {
      //edge case if closest is negative and have the same temperature but it's positive, have to update closest with the positive temperature
      closest = temp;
    } else if (Math.abs(temp) < Math.abs(closest)) {
      //compare with absolute values to check what temperature is close to zero, but save the original value
      closest = temp;
    }
  }

  return closest;
}

console.log(
  computeClosestToZero([
    7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7
  ])
);
