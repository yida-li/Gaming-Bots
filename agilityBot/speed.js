// importing the robotjs
// reminders + dependencies
// 264 197 is the center of character
// for the smallest game size in top left corner
// agility tracker green marker on
// entity hider prefered for less bug
// camera mode zoom outer limit = 1
// camera mode max zoom vertical camera
// ignore examine
// tile marked required
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function tick() {
  sleep(602);
}
function twotick() {
  sleep(2 * 602);
}
function threetick() {
  sleep(3 * 602);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// repositions character to the starting point for hard resets
function reposition(ms) {
  console.log('going back to default position');
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['f03e3e', 'c13232', 'c73535', 'a03432', 'cc3938', '', ''];
  var counter = true;
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        break;
      }
    }
  }
}

function obstacle1() {
  console.log('The first obstacles track');
  firstboulder();

  twotick();

  robot.moveMouseSmooth(264, 197); // center
  twotick();
  robot.moveMouseSmooth(264, 177); // move up
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  twotick();

  twotick();

  robot.moveMouseSmooth(285, 197); // move right
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click

  twotick();

  twotick();

  robot.moveMouseSmooth(264, 177); // move up
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click

  twotick();

  twotick();

  robot.moveMouseSmooth(264, 177); // move up
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  twotick();

  twotick();

  robot.moveMouseSmooth(264, 80); // move up a lot
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  sleep(6000);
}
function obstacle2() {
  reposition(2000);
  firsthurdle();
  twotick();

  twotick();
  robot.moveMouseSmooth(263, 175); // move up
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  twotick();
  robot.moveMouseSmooth(264, 175); // move up
  twotick();
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  sleep(120);
  robot.mouseClick(); //click
  twotick();
  robot.moveMouseSmooth(264, 137); // move up
  twotick();
  robot.mouseClick(); //click
  console.log('obstacle 2 done');
  sleep(5000);
}
function obstacle3() {
  sleep(2000);
  robot.moveMouseSmooth(201, 201); // move up
  twotick();
  robot.mouseClick(); //click
  sleep(5000);

  robot.moveMouseSmooth(249, 197);
  robot.mouseClick();
  sleep(6000);
  console.log('track finished!');
  sleep(6000);
}

function pickhat() {
  console.log('hey');
  var counter = true; // a max of 3 clicks in 1 tick for now
  var img = robot.screen.capture(0, 0, 560, 360);
  var targetNpc = ['cda61a', 'a88915', 'c29f19', 'b49317', 'd3b41c', 'a58715'];
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(120, 480);
      var random_y = getRandomInt(30, 320);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(201);
        robot.mouseClick('left');
        counter = false;
        break;
      }
    }
  }
}

function firstboulder() {
  var counter = 3; // a max of 3 clicks in 1 tick for now
  var img = robot.screen.capture(0, 0, 560, 266);
  var targetNpc = ['44b92e', '638644', '5c823f', '6b8e48', '678a46'];
  for (var i = 0; i < 1000; i++) {
    var random_x = getRandomInt(249, 275);
    var random_y = getRandomInt(166, 177);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color) && counter > 0) {
      console.log('found at : ' + random_x + ' ' + random_y);
      robot.moveMouse(random_x, random_y);
      counter--;
      robot.mouseClick('left');
      sleep(120);
    }
  }
}

function firsthurdle() {
  var counter = 3; // a max of 3 clicks in 1 tick for now
  var img = robot.screen.capture(0, 0, 560, 266);
  var targetNpc = ['2c5b23', '', '', '', ''];
  for (var i = 0; i < 1000; i++) {
    var random_x = getRandomInt(253, 275);
    var random_y = getRandomInt(184, 190);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color) && counter > 0) {
      console.log('found at : ' + random_x + ' ' + random_y);
      robot.moveMouse(random_x, random_y);
      counter--;
      robot.mouseClick('left');
      sleep(120);
    }
  }
}

//optional functions to increase efficiency

function findhat() {
  console.log('hey');
  var counter = true; // a max of 3 clicks in 1 tick for now
  var img = robot.screen.capture(0, 0, 560, 360);
  var targetNpc = ['89211c', 'ff0000', '821913', '  ab100e', 'ab100d'];
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(120, 480);
      var random_y = getRandomInt(30, 320);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(201);
        robot.mouseClick('left');
        counter = false;
        break;
      }
    }
  }
}

function findstick() {
  var img = robot.screen.capture(0, 0, 560, 266);
  var targetNpc = ['89211c', 'ff0000', '821913', '  ab100e', 'ab100d'];
  var counter = 4;
  for (var i = 0; i < 1000; i++) {
    var random_x = getRandomInt(249, 275);
    var random_y = getRandomInt(166, 177);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color && counter > 0)) {
      console.log('found at : ' + random_x + ' ' + random_y);
      robot.moveMouse(random_x, random_y - 10);

      robot.mouseClick('left');
      counter--;
      sleep(2000);
    }
    if (targetNpc.includes(sample_color && counter > 0)) {
      console.log('found at : ' + random_x + ' ' + random_y);
      robot.moveMouse(random_x - 20, random_y);

      robot.mouseClick('left');
      counter--;
      sleep(2000);
    }
  }
}
function drophat() {
  robot.moveMouse(582, 258);
  robot.mouseClick('right');
  sleep(642);
  robot.moveMouseSmooth(583, 314);
  robot.mouseClick();
}
function DC() {
  robot.moveMouse(665, 370);
  sleep(642);
  robot.mouseClick();
}
function AC() {
  robot.moveMouse(663, 354);
  sleep(642);
  robot.mouseClick();
}
fullCourse();
//drophat();pickhat();
function fullCourse() {
  while (true) {
    for (var i = 0; i < 2; i++) {
      reposition(9000);
      obstacle1();
      obstacle2();
      obstacle3();
    }
    DC();
    sleep(8000);
    for (var i = 0; i < 2; i++) {
      reposition(9000);
      obstacle1();
      obstacle2();
      obstacle3();
    }
    AC();
    sleep(8000);
  }
}

//firstboulder();rereposition();

//firsthurdle();
//
//
//
//findstick();

//reposition(9000);

//obstacle2();

//sleep(2000);
