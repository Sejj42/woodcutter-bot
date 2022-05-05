const robot = require("robotjs");
const coords = require("./coords");
const actions = require("./actions");

console.log(coords.mySpot.x);
console.log(util.util.moveMouseAndClick);

const main = () => {
  console.log("Starting...");
  util.sleep(3000);

  while (true) {
    actions.chopFirstTree(3000);
    actions.chopSecondTree(3000);
    actions.openBank(8000);
    actions.depositLogs(1500);
    actions.goBackToSpot(8000);
  }
};

// main();
