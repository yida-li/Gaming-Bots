//importing the robotjs
var zulrah = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function clickatPosition(x, y) {
  zulrah.moveMouseSmooth(x, y);
  zulrah.mouseClick();
  tick();
}

