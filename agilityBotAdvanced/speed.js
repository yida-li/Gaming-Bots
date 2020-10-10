// yida



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


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// repositions Client to be in the center of the UI
function syncronization(ms) {
  console.log('Finding application to focus');
  // around of half of a 1920x1080 desktop screen
  var img = robot.screen.capture(0, 0, 830, 1080);
  var targetNpc = ['', '', ''];
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
