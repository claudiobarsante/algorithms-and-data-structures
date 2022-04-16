/*See craking the Toptal interview
 */

function pokerChips(money) {
  const chips = [100, 50, 25, 10, 5, 1];
  let total = 0;

  for (let i = 0; i < chips.length; i++) {
    const chip = chips[i];
    if (chip <= money) {
      let used = Math.floor(money / chip);
      total += used;
      money = money - used * chip;
    }
  }

  return total;
}

console.log(pokerChips(126));
