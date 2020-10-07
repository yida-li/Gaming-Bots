//importing the robotjs
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);

  while (true) {
    attack();
    sleep(20000);
  }
}
function attack() {
  var finder = findTarget();
  robot.moveMouse(finder.random_x, finder.random_y);
  robot.mouseClick('right');
  sleep(601);
  git;
  robot.moveMouseSmooth(finder.random_x, finder.random_y + 27);
  robot.mouseClick('left');
}
function timer() {
  var img = robot.screen.capture(0, 0, 300, 300);
  var health = img.colorAt(28, 76);
  var man = ['621313'];
  if (man.includes(health)) {
    return true;
  }
}
function redTimer() {
  var img = robot.screen.capture(0, 0, 300, 300);
  var health = img.colorAt(28, 76);
  var man = ['621313'];
  if (man.includes(health)) {
    return false;
  }
}
function findTarget() {
  var width = 520;
  var height = 365;
  var img = robot.screen.capture(0, 0, width, height);
  var man = ['00ffff'];
  for (var i = 0; i < 1011; i++) {
    var random_x = getRandomInt(0, width - 1);
    var random_y = getRandomInt(0, height - 1);
    var sample_color = img.colorAt(random_x, random_y);

    if (man.includes(sample_color)) {
      console.log('found at : ' + random_x + ' ' + random_y);
      return { random_x, random_y };
    }
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
function waiting() {
  var random_x = getRandomInt(0, 10);
  sleep(random_x * 1000);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function findRoom() {
  var img = robot.screen.capture(x, y, width, height);
  var man = ['00ffff'];
  for (var i = 0; i < 100; i++) {}
}
function screen() {
  var img = robot.screen.capture(0, 0, 1920, 1080);
  var color = img.colorAt(30, 18);
  console.log(color);
}

main();
//screen();
