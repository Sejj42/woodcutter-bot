const util = require("./util");

const actions = {
  goBackToSpot: (ms) => {
    util.moveMouseAndClick(coords.mySpot.x, coords.mySpot.y);
    util.sleep(ms);
  },

  chopFirstTree: (ms) => {
    util.moveMouseAndClick(coords.firstTree.x, coords.firstTree.y);
    util.sleep(ms);
  },
  chopSecondTree: (ms) => {
    util.moveMouseAndClick(coords.secondTree.x, coords.secondTree.y);
    util.sleep(ms);
  },

  openBank: (ms) => {
    util.moveMouseAndClick(coords.bank.x, coords.bank.y);
    util.sleep(ms);
  },

  depositLogs: (ms) => {
    util.moveMouseAndClick(coords.deposit.x, coords.deposit.y);
    util.sleep(ms);
  },
};

module.exports = actions;
