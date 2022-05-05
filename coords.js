const robot = require("robotjs");

const screenSize = robot.getScreenSize();

const coords = {
  playerDefault: {
    x: screenSize.width / 2,
    y: screenSize.height / 2,
  },
  mySpot: {
    x: 935,
    y: 527,
  },
  firstTree: {
    x: 700,
    y: 385,
  },
  secondTree: {
    x: 800,
    y: 450,
  },
  thirdTree: {
    x: 920,
    y: 520,
  },
  deposit: {
    x: 1667,
    y: 669,
  },
  bank: {
    x: 1000,
    y: 165,
  },
  teak: {
    x: screenSize.width / 2 + 55,
    y: screenSize.height / 2 - 25,
  },
  firstInvItem: {
    x: 1368,
    y: 533,
  },
};

module.exports = coords;
