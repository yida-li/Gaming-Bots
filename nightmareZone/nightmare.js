//importing the robotjs

var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);

  while (true) {
    var j = 0;
    while (j < 6) {
      var random_x = getRandomInt(30000, 38520);

      robot.moveMouse(583, 294);
      robot.mouseClick('right');
      sleep(642);
      robot.moveMouseSmooth(583, 338);
      robot.mouseClick();

      sleep(4129);
      prayerToggle();

      j++;
      console.log('sleeping for ' + random_x + ' ms');
      sleep(random_x);
    }
    battleaxe();
  }
}

// function that performs wait for a thread/process/program
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}
// function that performs strength boost
function battleaxe() {
  robot.moveMouseSmooth(623, 254);
  robot.mouseClick();
  sleep(923);
  robot.moveMouseSmooth(589, 175);
  robot.mouseClick();
  sleep(523);
  robot.moveMouseSmooth(623, 254);
  robot.mouseClick();
  console.log('using my battleaxe spec ');
}
// function that resets health restore
function prayerToggle() {
  robot.moveMouseSmooth(557, 121);
  robot.mouseClick();
  sleep(131);
  robot.mouseClick();
}
// function that displays game tick
function tick() {
  console.log('1tick');
  sleep(601);
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

main();
