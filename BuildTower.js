//Build Tower
//Build Tower by the following given argument:
//number of floors (integer and always greater than 0).
//
//Tower block is represented as *

function towerBuilder(floors) {
  let space,
    star,
    tower = [];
  for (i = 1; i <= floors; i++) {
    space = " ".repeat(floors - i);
    star = "*".repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
