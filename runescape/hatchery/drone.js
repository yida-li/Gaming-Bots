// yida
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

function threeTickMining() {
  //5 tries

  for (var i = 0; i < 5; i++) {
    tickManipulate();

    clickRock();
    tick(2400);
  }
  //droping random amount at position 3,4 and 7,8 of inventory
  var orex = [getRandomInt(656, 670), getRandomInt(699, 716)];
  var orey = [getRandomInt(247, 258), getRandomInt(283, 296)];

  var random = getRandomInt(1, 4);

  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      dropItem(orex[i], orey[j]);
    }
  }
}

function tickManipulate() {
  var X_cordinateInventory = [
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
  ];
  var Y_cordinateInventory = [
    getRandomInt(247, 258),
    getRandomInt(247, 258),
    getRandomInt(247, 258),
    getRandomInt(247, 258),
    getRandomInt(283, 296),
    getRandomInt(283, 296),
    getRandomInt(283, 296),
    getRandomInt(283, 296),
    getRandomInt(321, 332),
    getRandomInt(321, 332),
    getRandomInt(321, 332),
    getRandomInt(321, 332),
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    ,
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    ,
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  var tickx = [getRandomInt(576, 586), getRandomInt(616, 630)];
  var ticky = [getRandomInt(247, 258), getRandomInt(247, 258)];

  robot.moveMouseSmooth(tickx[0], ticky[0]);
  robot.mouseClick();
  sleep(getRandomInt(100, 300));
  robot.moveMouse(tickx[1], ticky[0]);
  robot.mouseClick();
  /*var random= getRandomInt(1,3);
        if (random==1){
            robot.moveMouse(tickx[1],ticky[0]);
            robot.mouseClick();
        }
        else if (random==2){
            robot.moveMouse(tickx[0],ticky[1]);
            robot.mouseClick();
        }
        else if (random==3){
            robot.moveMouse(tickx[1],ticky[1]);
            robot.mouseClick();
        }*/
}

/**
 * This drop an item at coordinate x,y
 *
 * @param {number} x - X coordinate
 * @param {number} y - y coordinate
 */
function dropItem(x, y) {
  robot.moveMouseSmooth(x, y);
  robot.mouseClick('right');
  robot.moveMouseSmooth(x, y + 40);
  sleep(600);
  robot.mouseClick('left');
}

function clickRock() {
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['37221a'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 500);
    var random_y = getRandomInt(0, 360);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found rock at : ' + random_x + ' ' + random_y);

      robot.moveMouse(random_x, random_y);
      robot.mouseClick('left');

      return true;
    }
  }
  return false;
}

// testing modes

threeTickMining();
