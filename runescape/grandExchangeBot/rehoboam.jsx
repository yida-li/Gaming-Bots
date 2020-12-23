// dependencies/libraries/packages/bundles/extensions
var scv = require('robotjs');
const readline = require('readline');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

// function that displays game tick
function tick() {
  console.log('1tick');
  sleep(611);
}

// a subset of layers to differentiate time delay
function l1() {
  var random_x = getRandomInt(420, 699);
  sleep(random_x);
}
function la2() {
  var random_x = getRandomInt(4271, 10000);
  sleep(random_x);
}
function lay3() {
  var random_x = getRandomInt(0, 414);
  sleep(random_x);
}
function laye4() {
  var random_x = getRandomInt(14103, 31413);
  sleep(random_x);
}
// function that calls all layer
// sleeping for between 18.794 millisecond to 42.526 milliseconds
// used if necessary
function layer5() {
  l1();
  la2();
  lay3();
  laye4();
}

//function that returns random interger between floor and ceiling with
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exchange() { }

function clickBank() {
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(290, 295), getRandomInt(97, 99));
  scv.mouseClick('right');
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(290, 295), getRandomInt(97, 99) + 25);
  scv.mouseClick();
}
function clickExchange() {
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(132, 135), getRandomInt(56, 58));
  scv.mouseClick('right');
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(132, 135), getRandomInt(56, 58) + 25);
  scv.mouseClick();
}
