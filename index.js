const actions = require("./actions");
const util = require("./util");

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

const mainTeak = () => {
  console.log("Starting...");
  util.sleep(3000);
  actions.chopTeak(15000);
};

// main();
mainTeak();
