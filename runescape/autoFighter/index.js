//importing the robotjs
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);

  while (true) {
    while (true) {
      var find = findTarget();
      if (find == false) {
        console.log('Could not find a target ');
        break;
      }
      robot.moveMouse(find.random_x, find.random_y);
      robot.mouseClick('left');
      // robot.mouseClick('right');
      // sleep(940);
      // robot.moveMouseSmooth(find.random_x, find.random_y + 27);
      // robot.mouseClick('left');
      sleep(1270);
      enemyHealth();
      runBacktoCenter();
    }
    sleep(4000);
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findTarget() {
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['00ffff'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 500);
    var random_y = getRandomInt(0, 360);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found at : ' + random_x + ' ' + random_y);
      console.log('target found');

      return { random_x, random_y };
    }
  }
  return false;
}
function ownhealthbar() {
  // health bar dimension  20-135
  // heigth 75 82
  var img = robot.screen.capture(0, 0, 1980, 1080);
  var redBar = [
    '611211',
    '611212',
    '611213',
    '611214',
    '621410',
    '621411',
    '621412',
    '621413',
    '621311',
    '621312',
    '621313',
    '621314',
    '631410',
    '631411',
    '631412',
    '631414',
    '631512',
    '641513',
    '641514',
    '641515',
    '641516',
    '651615',
  ];

  var sample_color1 = img.colorAt(32, 78);
  console.log(sample_color1);
  var sample_color2 = img.colorAt(53, 78);
  console.log(sample_color2);
  var sample_color3 = img.colorAt(74, 72);
  console.log(sample_color3);
  var sample_color4 = img.colorAt(98, 78);
  console.log(sample_color4);
  var sample_color5 = img.colorAt(122, 78);
  console.log(sample_color5);
  console.log(sample_color1);

  if (redBar.includes(sample_color1)) {
    console.log('health is below 20%');
  } else if (redBar.includes(sample_color2)) {
    console.log('health is below 40%');
  } else if (redBar.includes(sample_color3)) {
    console.log('health is below 60%');
  } else if (redBar.includes(sample_color4)) {
    console.log('health is below 80%');
  } else if (redBar.includes(sample_color5)) {
    console.log('health is full');
  }
}
function runBacktoCenter() {
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['cfcf00'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 450);
    var random_y = getRandomInt(0, 300);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('repositioning');

      robot.moveMouseSmooth(random_x, random_y);
      robot.mouseClick('left');
      sleep(712);
      break;
    }
  }
}
function enemyHealth() {
  while (true) {
    sleep(1830);
    var img = robot.screen.capture(0, 0, 150, 100);
    var greenBar = ['0a8633'];
    var sample_color = img.colorAt(20, 78);
    var sample_color1 = img.colorAt(50, 78);
    var sample_color2 = img.colorAt(100, 78);

    if (greenBar.includes(sample_color2)) {
      console.log('attacking opponent');
    } else if (greenBar.includes(sample_color1)) {
      console.log('enemy is above 40% health');
    } else if (greenBar.includes(sample_color)) {
      console.log('enemy is below 20% health');
    } else {
      break;
    }
    sleep(6000);
  }
}
//healthbar();
main();
//
