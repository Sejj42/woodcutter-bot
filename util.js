const util = {
  moveMouseAndClick: (x, y) => {
    robot.moveMouse(x, y);
    robot.mouseClick();
  },

  sleep: (ms) => {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  },
};

module.exports = util;
