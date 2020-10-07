//importing the robotjs
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);

  while (true) {
    var j = 0;
    while (j < 6) {
      var random_x = getRandomInt(30000, 38520);

      robot.moveMouse(580, 294);
      robot.mouseClick('right');
      sleep(642);
      robot.moveMouseSmooth(580, 338);
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

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}
function battleaxe() {
  robot.moveMouseSmooth(623, 289);
  robot.mouseClick();
  sleep(923);
  robot.moveMouseSmooth(589, 175);
  robot.mouseClick();
  sleep(523);
  robot.moveMouseSmooth(623, 289);
  robot.mouseClick();
  console.log('using my battleaxe spec ');
}

function prayerToggle() {
  robot.moveMouseSmooth(557, 121);
  robot.mouseClick();
  sleep(131);
  robot.mouseClick();
}

function tick() {
  console.log('1tick');
  sleep(601);
}
function l1() {
  var random_x = getRandomInt(420, 699);
}

function la2() {
  var random_x = getRandomInt(4271, 10000);
}
function lay3() {
  var random_x = getRandomInt(0, 414);
}
function laye4() {
  var random_x = getRandomInt(14103, 31413);
}
function layer5() {
  // sleeping for between 18.794 millisecond to 42.526 milliseconds
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
