const robot = require("robotjs");
const { moveMouseAndClick, sleep } = require("./util");
const {
  mySpot,
  firstTree,
  secondTree,
  bank,
  deposit,
  teak,
  firstInvItem,
} = require("./coords");

const actions = {
  goBackToSpot: (ms) => {
    moveMouseAndClick(mySpot.x, mySpot.y);
    sleep(ms);
  },

  chopFirstTree: (ms) => {
    moveMouseAndClick(firstTree.x, firstTree.y);
    sleep(ms);
  },
  chopSecondTree: (ms) => {
    moveMouseAndClick(secondTree.x, secondTree.y);
    sleep(ms);
  },

  openBank: (ms) => {
    moveMouseAndClick(bank.x, bank.y);
    sleep(ms);
  },

  depositLogs: (ms) => {
    moveMouseAndClick(deposit.x, deposit.y);
    sleep(ms);
  },

  chopTeak: (ms) => {
    moveMouseAndClick(teak.x, teak.y);
    sleep(ms);
  },
  dropFullInv: (ms) => {
    let x = firstInvItem.x;
    let y = firstInvItem.y;
    for (let i = 0; i < 4; i++) {
      dropInvColumn(x, y, ms);
      x += 43.5;
    }
  },
};

const dropInvColumn = (x, y, ms) => {
  for (let i = 0; i < 7; i++) {
    robot.moveMouse(x, y);
    robot.mouseClick("right");
    sleep(ms);
    if (i === 6) robot.moveMouse(x, y + 25);
    else robot.moveMouse(x, y + 40);
    sleep(ms);
    robot.mouseClick();
    sleep(ms + 500);
    y += 36;
  }
};

module.exports = actions;
