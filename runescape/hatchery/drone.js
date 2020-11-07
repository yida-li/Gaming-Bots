var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
}

function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function tick(ms) {
  console.log(
    'sleeping for a random interval of ' + getRandomInt(ms, ms + 3000) + ' ms'
  );
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function login() {
  robot.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326));
  robot.mouseClick();
  sleep(1000);
  // type username
  robot.typeString('');
  sleep(1000);
  robot.keyTap('tab');
  // type password
  robot.typeString('');
  //
  robot.keyTap('enter');
  sleep(7000);
  // close the menu that pops up
  robot.moveMouseSmooth(getRandomInt(298, 469), getRandomInt(335, 382));
  robot.mouseClick();

  // start exchange function
}

function // clicks and initializes exchanging items
exchange(x) {
  robot.moveMouseSmooth(getRandomInt(190, 443), getRandomInt(200, 213));
  robot.mouseClick();

  sleep(3000);

  robot.moveMouseSmooth(getRandomInt(45, 71), getRandomInt(163, 175));
  robot.mouseClick();
  sleep(3000);

  robot.typeString(x);
  sleep(1000);
  robot.keyTap('enter');

  sleep(3000);

  // custom amount
  robot.moveMouseSmooth(getRandomInt(225, 244), getRandomInt(234, 247));
  robot.mouseClick();
  sleep(3000);

  // 100 amount
  robot.typeString('100');
  sleep(1000);
  robot.keyTap('enter');
  sleep(3000);

  //5 percent less
  robot.moveMouseSmooth(getRandomInt(284, 302), getRandomInt(234, 247));
  robot.mouseClick();
  sleep(1000);
  //confirm
  robot.moveMouseSmooth(getRandomInt(201, 322), getRandomInt(304, 324));
  robot.mouseClick();
}

function logOut() {
  robot.moveMouseSmooth(getRandomInt(635, 655), getRandomInt(498, 519));
  sleep(getRandomInt(600, 700));
  robot.mouseClick();
  robot.moveMouseSmooth(getRandomInt(595, 702), getRandomInt(452, 463));
  sleep(getRandomInt(600, 700));
  robot.mouseClick();
}

//turn to face bank
function moveHand(targetx, targety) {
  // Speed up the mouse.
  robot.setMouseDelay(2);

  var yidaNumber = Math.PI * 1.4;

  var height = targetx;
  var width = targety;

  for (var x = 0; x < width; x++) {
    y = height * Math.sin((yidaNumber * x) / width) + height;
    robot.moveMouse(x, y);
  }
  robot.moveMouseSmooth(targetx, targety);
}

// https://github.com/yida-li/Gaming-Bots
// cnnds
//
// the only thing stopping me was my own ego, super ego and the voices of others that are drowning my own inner desires
//
//
//  login();

//
// moveHand(200, 200);

function fullcourse() {
  login();
  sleep(3000);
  //exchange('grimy harralander');

  reposition();
  sleep(3000);
  collectResources();
  sleep(3000);
  logOut();
}

function reposition() {
  robot.setMouseDelay(0.5);
  robot.moveMouseSmooth(58, 138);
  robot.mouseToggle('down', 'right');
  robot.moveMouseSmooth(246, 138);
  robot.mouseToggle('up', 'right');
}

function collectResources() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193);
  robot.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  robot.mouseClick('right');
  sleep(getRandomInt(600, 700));
  robot.moveMouseSmooth(x, y + 43);
  sleep(getRandomInt(600, 700));
  robot.mouseClick();
  sleep(getRandomInt(3500, 4000));
  console.log('collecting');
  var boxArrayX = [
    getRandomInt(68, 85),
    getRandomInt(68, 85),
    getRandomInt(68, 85) + 111,
    getRandomInt(68, 85) + 111,
    getRandomInt(68, 85) + 222,
    getRandomInt(68, 85) + 222,
    getRandomInt(68, 85) + 333,
    getRandomInt(68, 85) + 333,
  ];

  var boxArrayY = [
    getRandomInt(155, 173),
    getRandomInt(155, 173) + 82,
    getRandomInt(155, 173),
    getRandomInt(155, 173) + 82,
    getRandomInt(155, 173),
    getRandomInt(155, 173) + 82,
    getRandomInt(155, 173),
    getRandomInt(155, 173) + 82,
  ];
  var counter = 0;
  while (counter < 8) {
    var destiny = getRandomInt(0, 7);
    if (boxArrayX[destiny] != 0 && boxArrayY[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      robot.moveMouseSmooth(boxArrayX[destiny], boxArrayY[destiny]);
      robot.mouseClick();
      sleep(getRandomInt(150, 230));
      boxArrayX[destiny] = 0;
      boxArrayY[destiny] = 0;

      counter++;
    }
  }
  console.log('Closing collection log');
  closeThing();
}

function closeThing() {
  robot.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    robot.mouseClick();
    sleep(231);
  }
}

//reposition();collectResources();
fullcourse();
