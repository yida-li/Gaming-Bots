//importing the robotjs
var nightmare = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function clickatPosition(x, y) {
  nightmare.moveMouseSmooth(x, y);
  nightmare.mouseClick();
  tick();
}

function biteCake() {
  sleep(642);
  nightmare.moveMouseSmooth(583, 331);
  nightmare.mouseClick('right'); // 44 is 2nd opetion right click
  nightmare.moveMouseSmooth(583, 375);
  nightmare.mouseClick();
  sleep(602);
  nightmare.moveMouseSmooth(getRandomInt(800, 1300), getRandomInt(69, 169)); //200 iq
  nightmare.moveMouseSmooth(583, 331 + 534);
  nightmare.mouseClick('right'); // 44 is 2nd opetion right click
  nightmare.moveMouseSmooth(583, 375 + 534);
  nightmare.mouseClick();
  sleep(642);
  /*
  nightmare.moveMouseSmooth(583, 375+534);
  nightmare.mouseClick();
  nightmare.moveMouseSmooth(583+775, 331);
  nightmare.mouseClick('right'); // 44 is 2nd opetion right click
  nightmare.moveMouseSmooth(583, 375);
  nightmare.mouseClick();*/
}

/**
 *
 *
 *
 *
 *
 */
function openLootBox() {
  var X_herbArray = [
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(576, 586),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(616, 630),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(656, 670),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
    getRandomInt(699, 716),
  ];
  var Y_herbArray = [
    getRandomInt(247, 258),
    getRandomInt(283, 296),
    getRandomInt(321, 332),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(247, 258),
    getRandomInt(283, 296),
    getRandomInt(321, 332),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(247, 258),
    getRandomInt(283, 296),
    getRandomInt(321, 332),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(247, 258),
    getRandomInt(283, 296),
    getRandomInt(321, 332),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
  ];

  var counter = 0;
  while (counter < 27) {
    var destiny = getRandomInt(0, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      nightmare.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
      nightmare.mouseClick('right');

      nightmare.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 40);
      nightmare.mouseClick();
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter++;
    }
  }
}

// function of sheer complexity
function farmingCourse() {
  var timesLeft=100;
  for (var i = 0; i < 4; i++) {
    var X_herbArray = [
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(576, 586),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(616, 630),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(656, 670),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
      getRandomInt(699, 716),
    ];
    var Y_herbArray = [
      getRandomInt(247, 258),
      getRandomInt(283, 296),
      getRandomInt(321, 332),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
      getRandomInt(247, 258),
      getRandomInt(283, 296),
      getRandomInt(321, 332),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
      getRandomInt(247, 258),
      getRandomInt(283, 296),
      getRandomInt(321, 332),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
      getRandomInt(247, 258),
      getRandomInt(283, 296),
      getRandomInt(321, 332),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
    ];

    var counter = 0;
    while (counter < 26) {
      var destiny = getRandomInt(3, 27);
      if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
        // time complexity applied, just coen 352, from data structures, from algorithm
        nightmare.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        nightmare.mouseClick();
        nightmare.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        nightmare.mouseClick();
        console.log(timesLeft+' loops left.')
        biteCake();
        sleep(getRandomInt(15001, 29999));
        biteCake();
        sleep(getRandomInt(15001, 29999));
        randomeithzer();
        sleep(getRandomInt(15001, 29999));
        biteCake();
        sleep(getRandomInt(15001, 29999));
        battleaxe();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }
  }
}

// randomlly choose to either battleaxe or toggle to reset hp
function randomeithzer() {
  var temp2 = getRandomInt(1, 2);

  if ((temp2 = 1)) {
    prayerToggle1();
    prayerToggle2();
  } else {
    biteCake();
  }
}

function findPowerUp() {
  var flag = false;
  // Default colour for object marker at bank counter is FFFF00
  var img = nightmare.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['1b1b7f'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);

      nightmare.moveMouseSmooth(random_x, random_y);
      nightmare.mouseClick();
      flag = true;
      return flag;
    }
  }
  return flag;
}

function findPowerUp2() {
  // Default colour for object marker at bank counter is FFFF00
  var flag = false;
  var img = nightmare.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['5c523f', '9d9625', '5c513e', '1b1b7f'];
  for (var i = 0; i < 1011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);

      nightmare.moveMouseSmooth(random_x, random_y);
      nightmare.mouseClick();
      flag = true;
      return flag;
    }
  }
  return flag;
}
function findPowerUp1() {
  // Default colour for object marker at bank counter is FFFF00
  var img = nightmare.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['1a1a7e', '0000cd', '5c513e'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);

      nightmare.moveMouseSmooth(random_x, random_y);
      nightmare.mouseClick();
      flag = true;
      return flag;
    }
  }
  return flag;
}
function findPowerUp() {
  flag = false;
  // Default colour for object marker at bank counter is FFFF00
  var img = nightmare.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['5c523f', '5c513e', '7e7c10'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 579);
    var random_y = getRandomInt(500, 897);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);

      nightmare.moveMouseSmooth(random_x, random_y);
      nightmare.mouseClick();
      flag = true;
      return flag;
    }
  }
  return flag;
}

function guzzleLikeMad1() {
  for (var i = 0; i < getRandomInt(30, 40); i++) {
    nightmare.moveMouseSmooth(getRandomInt(581, 585), getRandomInt(329, 334));

    nightmare.mouseClick('right'); // 44 is 2nd opetion right click
    sleep(getRandomInt(50, 130));
    nightmare.moveMouseSmooth(583, 375);
    nightmare.mouseClick();
  }
}
function guzzleLikeMad3() {
  for (var i = 0; i < getRandomInt(1, 4); i++) {
    nightmare.moveMouseSmooth(
      getRandomInt(581, 585) + 774,
      getRandomInt(329, 334)
    );

    nightmare.mouseClick('right'); // 44 is 2nd opetion right click
    sleep(getRandomInt(50, 130));
    nightmare.moveMouseSmooth(583 + 774, 375);
    nightmare.mouseClick();
  }
}

function guzzleLikeMad2() {
  for (var i = 0; i < getRandomInt(30, 40); i++) {
    nightmare.moveMouseSmooth(getRandomInt(581, 585), getRandomInt(862, 867));
    nightmare.mouseClick('right');
    sleep(getRandomInt(50, 130));
    nightmare.moveMouseSmooth(583, 375 + 534);
    nightmare.mouseClick();
  }
}
// function that performs strength boost
function battleaxe() {
  nightmare.moveMouseSmooth(582, 293);
  nightmare.mouseClick();
  sleep(923);
  nightmare.moveMouseSmooth(559, 175);
  nightmare.mouseClick();
  sleep(523);
  nightmare.moveMouseSmooth(582, 293);
  nightmare.mouseClick();
  console.log('using my battleaxe spec ');
}
// function that resets health restore
function prayerToggle1() {
  nightmare.moveMouseSmooth(557, 121);
  nightmare.mouseClick();
  sleep(231);
  nightmare.mouseClick();
}
function prayerToggle2() {
  nightmare.moveMouseSmooth(557, 121 + 534);
  nightmare.mouseClick();
  sleep(231);
  nightmare.mouseClick();
}
function prayerToggle3() {
  nightmare.moveMouseSmooth(557 + 775, 121);
  nightmare.mouseClick();
  sleep(231);
  nightmare.mouseClick();
}
// function that displays game tick
function tick() {
  console.log('1tick');
  sleep(611);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://github.com/yida-li/Gaming-Bots

/*
openLootBox();
guzzleLikeMad2();
guzzleLikeMad2();
guzzleLikeMad2();
guzzleLikeMad1();
guzzleLikeMad1();
guzzleLikeMad1();
*/

farmingCourse();
