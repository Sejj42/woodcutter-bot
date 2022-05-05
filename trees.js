const { sleep } = require("./util");
const {
  chopFirstTree,
  chopSecondTree,
  openBank,
  depositLogs,
  goBackToSpot,
  chopTeak,
  dropFullInv,
} = require("./actions");

const willow = () => {
  console.log("Starting...");
  sleep(3000);

  while (true) {
    chopFirstTree(3000);
    chopSecondTree(3000);
    openBank(8000);
    depositLogs(1500);
    goBackToSpot(8000);
  }
};

const teak = () => {
  console.log("Starting...");
  sleep(3000);
  while (true) {
    chopTeak(20000);
    dropFullInv(1000);
  }
};
module.exports = { willow, teak };
