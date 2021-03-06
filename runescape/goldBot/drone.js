//
// dependencies/libraries/packages/bundles/extensions/tokens
//
var scv = require('robotjs');
const readline = require('readline');
var accessToken = require('../aauthentication/auth.json');
// var auth = require('../aauthenticationFolder/auth');
// var auth = require('../aauthenticationFolder/auth1');
// var auth = require('../aauthenticationFolder/auth2');
// var auth = require('../aauthenticationFolder/auth3');
// var auth = require('../aauthenticationFolder/auth4');
// var auth = require('../aauthenticationFolder/auth5');

// function that performs wait for a thread/process/program
function sleep(ms) {
  // console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

// Alternative function that displays game sleep timer
function tick(x) {
  // console.log('sleeping for ' + ms + ' ms');
  sleep(x);
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

function // 1 unit combination
SoloMix() {
  var time = 0;

  //    randomlly 100,200 cycle interval
  while (time++ <= 1000) {
    // top left

    var X_firstHalf = [
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
    ];
    var X_secondHalf = [
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
    var Y_firstHalf = [
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
    ];
    var Y_secondHalf = [
      getRandomInt(358, 371),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
    ];

    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

    var x = 3;
    var y = 3;
    // movemouse to the 3rd row,7th column 381, 198

    var xlocation = getRandomInt(381 - x, 381 + x);
    var ylocation = getRandomInt(198 - y, 198 + y);
    scv.moveMouseSmooth(xlocation, ylocation);

    scv.mouseClick('right');

    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(xlocation, ylocation + 85);
    scv.mouseClick();

    tick(getRandomInt(700, 800));
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();

    // a1
    closeBank1();
    tick(getRandomInt(700, 800));
    var temp = getRandomInt(0, 13);
    scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    var temp2 = getRandomInt(0, 13);
    scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
    scv.mouseClick();
    tick(getRandomInt(100, 200));
    scv.mouseClick();
    sleep(getRandomInt(8800, 9200));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    advancedDeposit1();
    sleep(getRandomInt(634, 780));
  }
}

function // slowly combining the clean herb with vial of water in a designated location with 2 svcs with random intervals+ random combination elements
DuoMix() {
  var time = 0;
  var randomTime=getRandomInt(300, 350);
  //    randomlly between 3 hour -5 hour worktime
  while (time < randomTime) {
    time++;

    // top left
    scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
    var X_firstHalf = [
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
    ];
    var X_secondHalf = [
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
    var Y_firstHalf = [
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
    ];
    var Y_secondHalf = [
      getRandomInt(358, 371),
      getRandomInt(358, 371),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(389, 406),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(431, 444),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
      getRandomInt(463, 479),
    ];

    //bottom left
    var X1_firstHalf = [
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
    ];
    var X1_secondHalf = [
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
    var Y1_firstHalf = [
      getRandomInt(247, 258) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(358, 371) + 534,
    ];
    var Y1_secondHalf = [
      getRandomInt(358, 371) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(463, 479) + 534,
    ];
    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

    var x = 3;
    var y = 3;
    // movemouse to the 3rd row,7th column 381, 198

    var xlocation = getRandomInt(381 - x, 381 + x);
    var ylocation = getRandomInt(198 - y, 198 + y);
    scv.moveMouseSmooth(xlocation, ylocation);

    scv.mouseClick('right');

    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(xlocation, ylocation + 85);
    scv.mouseClick();

    tick(getRandomInt(700, 800));
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();

    // a1
    closeBank1();
    tick(getRandomInt(700, 800));
    var temp = getRandomInt(0, 13);
    scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    var temp2 = getRandomInt(0, 13);
    scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
    scv.mouseClick();

    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

    // b1

    var xlocation = getRandomInt(381 - x, 381 + x);
    var ylocation = getRandomInt(198 - y, 198 + y) + 534;
    scv.moveMouseSmooth(xlocation, ylocation);

    scv.mouseClick('right');

    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(xlocation, ylocation + 85);
    scv.mouseClick();

    tick(getRandomInt(700, 800));
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3) + 534
    );
    scv.mouseClick();

    closeBank2();
    tick(getRandomInt(700, 800));
    var temp3 = getRandomInt(0, 13);
    scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
    scv.mouseClick();
    var temp4 = getRandomInt(0, 13);
    scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
    scv.mouseClick();

    sleep(getRandomInt(4300, 4700));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    advancedDeposit1();

    sleep(getRandomInt(1200, 2000));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));

    advancedDeposit2();

    console.log(randomTime-time + 'cycles left');
  }
}

function // slowly harvesting gas once         wait6ms
DuoMake1stRow1tick() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(125 - 3, 125 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(125 - 3, 125 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  // set timer depending on the variants
  //
  sleep(getRandomInt(6100, 6700)); // for 1tick  unf potions
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}
function // slowly harvesting gas once         wait7.5ms
DuoMake1stRow2tick() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(125 - 3, 125 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(125 - 3, 125 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  // set timer depending on the variants
  //
  sleep(getRandomInt(7500, 7800)); // for 1tick  unf potions
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // slowly harvesting gas once         wait9ms
DuoMake1stRow3tick() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(125 - 3, 125 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(125 - y, 125 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(125 - 3, 125 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  // set timer depending on the variants
  //
  sleep(getRandomInt(9200, 9400)); // for 1tick  unf potions
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // slowing making supply once        wait7.5ms
DuoMake2ndRow2tick() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(163 - y, 163 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(163 - 3, 163 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X_firstHalf[temp],
    Y_firstHalf[temp] + getRandomInt(42, 43)
  );
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(163 - y, 163 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(163 - 3, 163 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X1_firstHalf[temp3],
    Y1_firstHalf[temp3] + getRandomInt(42, 43)
  );
  scv.mouseClick('left');
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  //
  //
  //
  sleep(getRandomInt(6100, 6700));
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // slowly mining minerals once        wait7.5ms
DuoMake3rdRow1tick() {
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(198 - 3, 198 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(198 - 3, 198 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  // set timer depending on the variants
  //
  sleep(getRandomInt(6700, 7400)); // 1tick for unf potions
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // slowly mining minerals once        wait9ms
DuoMake3rdRow3tick() {
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(198 - 3, 198 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(198 - 3, 198 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  // set timer depending on the variants
  //
  sleep(getRandomInt(8800, 9300)); // 3or 1tick  yew potions
  //
  //
  //
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function closeBank1() {
  scv.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}
function closeBank2() {
  scv.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125) + 534);
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}

function closeBank3() {
  scv.moveMouseSmooth(
    getRandomInt(551, 556) + 779,
    getRandomInt(111, 125) + 534
  );
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}

function // instantly click all grimmy herbs with 1 scvs
SoloClean() {
  for (var i = 0; i < 1000; i++) {
    scv.moveMouseSmooth(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank1();
    sleep(getRandomInt(700, 800));
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

    //a2
    var counter = 0;
    while (counter < 27) {
      var destiny = getRandomInt(0, 27);
      if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
        // time complexity applied, just coen 352, from data structures, from algorithm
        scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        scv.mouseClick();
        tick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2400, 2500));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    tick(getRandomInt(100, 200));
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    advancedDeposit1();
  }
}
function // instantly click all grimmy herbs with 2 svcs
DuoClean() {
  var time = 0;
  var randomTime=getRandomInt(300, 350);
  //    randomlly between 3 hour -5 hour worktime
  while (time < randomTime) {
    time++;
    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    // click the location of 3rd row, 8th position
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank1();

    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
    // b1

    scv.moveMouseSmooth(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank2();

    console.log(' harvesting vespian gas ');
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
    /*
          Optional Arrays
    var X_herbArray2 = [
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
    ];*/
    /*var Y_herbArray2 = [
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
    ];
*/
    //a2
    var counter = 0;
    while (counter < 27) {
      var destiny = getRandomInt(0, 27);
      if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
        // time complexity applied, just coen 352, from data structures, from algorithm
        scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        scv.mouseClick();
        scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        scv.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2830, 3130));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    var r1= getRandomInt(1,3);
    for( var i=0;i<r1;i++){
      sleep(getRandomInt(134, 180));
      scv.mouseClick();
    }
    sleep(getRandomInt(134, 280));
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    advancedDeposit1();

    sleep(getRandomInt(1200, 2000));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();  
    var r2= getRandomInt(1,3);
    for( var i=0;i<r2;i++){
      sleep(getRandomInt(134, 180));
      scv.mouseClick();
    }
    sleep(getRandomInt(634, 780));

    advancedDeposit2();
   
    console.log(randomTime-time + 'cycles left');
  }
}
function // instantly click all grimmy herbs with 3 svcs
TrioClean() {
  var yida = 0;
  for (var i = 0; i < 1300; i++) {
    // random mousemovement
    console.log(' initialized arbitrary mouse pattern ');
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    // click the location of 3rd row, 8th position
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank1();
    console.log(' randomized arbitrary mouse pattern ');
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
    // b1

    scv.moveMouseSmooth(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank2();
    console.log(' finalized arbitrary mouse pattern ');
    scv.moveMouseSmooth(getRandomInt(0, 560) + 779, getRandomInt(0, 332) + 534);
    // c1

    scv.moveMouseSmooth(
      getRandomInt(429 - 4, 429 + 4) + 779,
      getRandomInt(198 - 3, 198 + 3) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank3();

    console.log(' harvesting vespian gas ');
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
    var X_herbArray2 = [
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
    var Y_herbArray2 = [
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
    ];
    var X_herbArray3 = [
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(576, 586) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(616, 630) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(656, 670) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
      getRandomInt(699, 716) + 779,
    ];
    var Y_herbArray3 = [
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
    ];
    //a2
    var counter = 0;
    while (counter < 27) {
      var destiny = getRandomInt(0, 27);
      if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
        // time complexity applied, just coen 352, from data structures, from algorithm
        scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        scv.mouseClick();
        scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        scv.mouseClick();
        scv.moveMouse(X_herbArray[destiny] + 779, Y_herbArray[destiny] + 534);
        scv.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2300, 3130));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97) + 779,
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    scv.moveMouseSmooth(
      getRandomInt(432, 454) + 779,
      getRandomInt(327, 342) + 534
    );
    scv.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
  }
}

function // used in Algorithm4
DuoMakeSupply() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(198 - 3, 198 + 3));
  scv.mouseClick();

  // a1
  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick();

  var temp2 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(163 - y, 163 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(163 - 3, 163 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X1_firstHalf[temp3],
    Y1_firstHalf[temp3] + getRandomInt(42, 43)
  );
  scv.mouseClick('left');
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  sleep(getRandomInt(9400, 10700));

  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // used in Algorithm4
DuoMakeSupplyReverse() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(163 - y, 163 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(163 - 3, 163 + 3));
  scv.mouseClick();

  // a1

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X_firstHalf[temp],
    Y_firstHalf[temp] + getRandomInt(42, 43)
  );
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);

  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(198 - 3, 198 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  sleep(getRandomInt(9400, 10700));
  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function // finite loop that performs fletch
Algorithm1() {
  var count = 0;
  while (count < 10000) {
    var temp = getRandomInt(1, 256);
    if (temp > 252) {
      DuoMake1stRow1tick();

      count++;
    } else if (temp > 236) {
      DuoMake2ndRow2tick();
      count++;
    } else {
      DuoMake3rdRow3tick();
      count++;
    }
    console.log(count + ' cycles.');
  }
}

function // finite loop that performs unf pot
Algorithm2() {
  var count = 0;
  while (true) {
    var temp = getRandomInt(1, 256);
    if (temp > 250) {
      DuoMake1stRow3tick();

      count++;
    } else if (temp > 236) {
      DuoMake2ndRow2tick();
      count++;
    } else {
      DuoMake3rdRow1tick(); // which is 1ticking mainly, for unf potion run
      count++;
    }
    console.log(count + ' cycles.');
  }
}

function // Completely insane Arbitrary Random Unpredictable Algorithmn
AlgorithmX() {
  var count = 0;
  while (true) {
    var temp = getRandomInt(1, 256);
    if (temp > getRandomInt(getRandomInt(1, 126), getRandomInt(127, 256))) {
      DuoMake3rdRow3tick();

      count++;
    } else if (
      temp > getRandomInt(getRandomInt(1, 126), getRandomInt(127, 256))
    ) {
      DuoMake2ndRow2tick();
      count++;
    } else {
      DuoMake1stRow1tick();
      count++;
    }
    console.log(count + ' cycles.');
  }
}


function // infinite loop that performs creats supplys
Algorithm3() {
  
  while (true) {
    login1();
    login2();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    reposition2();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    openBank2();

    sleep(getRandomInt(4000, 5000));

    // approxiate 3 hour-5 hours

    var count = 0;
    var tempHour = getRandomInt(300, 450);
    while (count < tempHour) {
      var temp = getRandomInt(1, 256);
      if (temp > 250) {
        DuoMake3rdRow3tick();
        count++;
      } else if (temp > 236) {
        DuoMake1stRow1tick(); // which is 1ticking mainly, for unf potion run
        count++;
      } else {
        DuoMake2ndRow2tick();
        count++;
      }
      console.log(tempHour - count + ' cycles left before reset.');
    }
    var chance = getRandomInt(1, 20); //10% chance to collect resources
    if (chance == 10) {
      closeBank1();
      closeBank2();
      collectResources1();
      collectResources2();
    }
    closeBank1();
    closeBank2();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    logOut2();
    //sleep(getRandomInt(40000, 50000));
    sleep(getRandomInt(4000, 5000));
  }
}
function // finite loop that performs cooking/fletching arbitrary
Algorithm4() {
  var count = 0;
  while (true) {
    var temp = getRandomInt(1, 256);
    if (temp < 126) {
      DuoMakeSupply();
      count++;
    } else {
      DuoMakeSupplyReverse();
      count++;
    }
    console.log(count + ' cycles.');
  }
}

function // infinite loop that performs unf pot
Algorithm5() {
  while (true) {
    login1();
    login2();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    reposition2();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    openBank2();

    sleep(getRandomInt(4000, 5000));

    // approxiate 3 hour-5 hours

    var count = 0;
    var tempHour = getRandomInt(450, 600);
    while (count < tempHour) {
      var temp = getRandomInt(1, 256);
      if (temp > 250) {
        DuoMake2ndRow2tick();
        count++;
      } else if (temp > 236) {
        DuoMake1stRow3tick();
        count++;
      } else {
        DuoMake3rdRow1tick(); // which is 1ticking mainly, for unf potion run
        count++;
      }
      console.log(tempHour - count + ' cycles left before reset.');
    }
    var chance = getRandomInt(1, 20); //10% chance to collect resources
    if (chance == 10) {
      closeBank1();
      closeBank2();
      collectResources1();
      collectResources2();
    }
    closeBank1();
    closeBank2();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    logOut2();
    sleep(getRandomInt(40000, 50000));
  }
}

function // infinite loop that performs fletch
Algorithm6() {
  
  while (true) {
    login1();
    login2();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    reposition2();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    openBank2();

    sleep(getRandomInt(4000, 5000));

    // approxiate 3 hour-5 hours

    var count = 0;
    var tempHour = getRandomInt(300, 450);
    while (count < tempHour) {
      var temp = getRandomInt(1, 256);
      if (temp > 250) {
        DuoMake2ndRow2tick();
        count++;
      } else if (temp > 236) {
        DuoMake1stRow1tick(); // which is 1ticking mainly, for unf potion run
        count++;
      } else {
        DuoMake3rdRow3tick();
        count++;
      }
      console.log(tempHour - count + ' cycles left before reset.');
    }
    var chance = getRandomInt(1, 20); //10% chance to collect resources
    if (chance == 10) {
      closeBank1();
      closeBank2();
      collectResources1();
      collectResources2();
    }
    closeBank1();
    closeBank2();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    logOut2();
    //sleep(getRandomInt(40000, 50000));
    sleep(getRandomInt(4000, 5000));
  }
}
function // infinite loop that performs cleans grimmy herb and make it into unf potion for 1 SCV
Algorithm7() {
  while (true) {
    login1();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    sleep(getRandomInt(4000, 5000));
    // approxiate 3 hour
    SoloMix();
    //
    closeBank1();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    sleep(getRandomInt(4000, 5000));
    login1();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    sleep(getRandomInt(4000, 5000));
    banktab1();
    // approxiate 3 hour
    SoloClean();
    //
    closeBank1();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    sleep(getRandomInt(4000, 5000));
  }
}
function // infinite loop that performs cleans grimmy herb and make it into unf potion for 2 SCV
Algorithm8() {
  while (true) {
    login1();
    login2();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    reposition2();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    openBank2();
    sleep(getRandomInt(4000, 5000));
    // approxiate 3 hour
    DuoMix();
    //
    closeBank1();
    closeBank2();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    logOut2();
    sleep(getRandomInt(4000, 5000));
    login1();
    login2();
    sleep(getRandomInt(4000, 5000));
    reposition1();
    reposition2();
    sleep(getRandomInt(4000, 5000));
    openBank1();
    openBank2();
    sleep(getRandomInt(4000, 5000));
    banktab1();
    banktab2();
    // approxiate 3 hour
    DuoClean();
    //
    closeBank1();
    closeBank2();
    sleep(getRandomInt(4000, 5000));
    logOut1();
    logOut2();
    sleep(getRandomInt(4000, 5000));
  }
}
function login1() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326));
  scv.mouseClick();
  sleep(1000);
  // type username

  scv.typeString(accessToken.username1);
  sleep(1000);
  scv.keyTap('tab');
  // type password
  scv.typeString(accessToken.password1);

  scv.keyTap('enter');
  sleep(9000);
  sleep(getRandomInt(4000, 5000));
  sleep(getRandomInt(4000, 5000));
  sleep(getRandomInt(4000, 5000));
  // close the menu that pops up
  scv.moveMouseSmooth(getRandomInt(298, 469), getRandomInt(335, 382));
  scv.mouseClick();
  sleep(getRandomInt(100, 110));
  scv.mouseClick();
}
function fastlogin1() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326));
  scv.mouseClick();
  sleep(1000);
  // type username

  scv.typeString(accessToken.username1);
  sleep(1000);
  scv.keyTap('tab');
  // type password
  scv.typeString(accessToken.password1);

  scv.keyTap('enter');
}
function login2() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326) + 534);
  scv.mouseClick();
  sleep(1000);
  // type username
  scv.typeString(accessToken.username2);
  sleep(1000);
  scv.keyTap('tab');
  // type password
  scv.typeString(accessToken.password2);
  //
  scv.keyTap('enter');
  sleep(9000);
  sleep(getRandomInt(4000, 5000));
  sleep(getRandomInt(4000, 5000));
  // close the menu that pops up
  scv.moveMouseSmooth(getRandomInt(298, 469), getRandomInt(335, 382) + 534);
  scv.mouseClick();
  sleep(getRandomInt(100, 110));
  scv.mouseClick();
}
function fastlogin2() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326) + 534);
  scv.mouseClick();
  sleep(1000);
  // type username
  scv.typeString(accessToken.username2);
  sleep(1000);
  scv.keyTap('tab');
  // type password
  scv.typeString(accessToken.password2);
  //
  scv.keyTap('enter');
}
function login3() {
  scv.moveMouseSmooth(
    getRandomInt(407, 520) + 779,
    getRandomInt(305, 326) + 534
  );
  scv.mouseClick();
  sleep(1000);
  // type username
  scv.typeString('');
  sleep(1000);
  scv.keyTap('tab');
  // type password
  scv.typeString('');
  //
  scv.keyTap('enter');
  sleep(9000);
  sleep(getRandomInt(4000, 5000));
  sleep(getRandomInt(4000, 5000));
  // close the menu that pops up
  scv.moveMouseSmooth(
    getRandomInt(298, 469) + 779,
    getRandomInt(335, 382) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(100, 110));
  scv.mouseClick();
}

function logOut1() {
  scv.moveMouseSmooth(getRandomInt(635, 655), getRandomInt(498, 519));
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  scv.moveMouseSmooth(getRandomInt(595, 702), getRandomInt(452, 463));
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
}
function logOut2() {
  scv.moveMouseSmooth(getRandomInt(635, 655), getRandomInt(498, 519) + 534);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  scv.moveMouseSmooth(getRandomInt(595, 702), getRandomInt(452, 463) + 534);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
}
function logOut3() {
  scv.moveMouseSmooth(
    getRandomInt(635, 655) + 779,
    getRandomInt(498, 519) + 534
  );
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  scv.moveMouseSmooth(
    getRandomInt(595, 702) + 779,
    getRandomInt(452, 463) + 534
  );
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
}

function reposition1() {
  scv.setMouseDelay(0.5);
  scv.moveMouseSmooth(58, 138);
  scv.mouseToggle('down', 'right');
  scv.moveMouseSmooth(246, 138);
  scv.mouseToggle('up', 'right');
}
function reposition2() {
  scv.setMouseDelay(0.5);
  scv.moveMouseSmooth(58, 138 + 534);
  scv.mouseToggle('down', 'right');
  scv.moveMouseSmooth(246, 138 + 534);
  scv.mouseToggle('up', 'right');
}
function reposition3() {
  scv.setMouseDelay(0.5);
  scv.moveMouseSmooth(58 + 779, 138 + 534);
  scv.mouseToggle('down', 'right');
  scv.moveMouseSmooth(246 + 779, 138 + 534);
  scv.mouseToggle('up', 'right');
}

function openBank1() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193);
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 20);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));
}
function banktab1() {
  // currently 6th position

  var x = getRandomInt(314, 328);
  var y = getRandomInt(79, 91);
  scv.moveMouseSmooth(x, y);
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));

  sleep(getRandomInt(600, 700));
}
function banktab2() {
  // currently 6th position

  var x = getRandomInt(314, 328);
  var y = getRandomInt(79, 91) + 534;
  scv.moveMouseSmooth(x, y);
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));

  sleep(getRandomInt(600, 700));
}

function banktab3() {
  // currently 6th position

  var x = getRandomInt(314, 344) + 779;
  var y = getRandomInt(79, 91) + 534;
  scv.moveMouseSmooth(x, y);
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));
  sleep(getRandomInt(600, 700));
  sleep(getRandomInt(600, 700));
}
function openBank2() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193) + 534;
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 20);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));
}
function openBank3() {
  var x = getRandomInt(248, 267) + 779;
  var y = getRandomInt(186, 193) + 534;
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 20);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));
}
function collectResources1() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193);
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 43);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
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
      scv.moveMouseSmooth(boxArrayX[destiny], boxArrayY[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(150, 230));
      boxArrayX[destiny] = 0;
      boxArrayY[destiny] = 0;

      counter++;
    }
  }
  console.log('Closing collection log');
  closeThing();
}
function collectResources2() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193) + 534;
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 43);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
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
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
  ];
  var counter = 0;
  while (counter < 8) {
    var destiny = getRandomInt(0, 7);
    if (boxArrayX[destiny] != 0 && boxArrayY[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouseSmooth(boxArrayX[destiny], boxArrayY[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(150, 230));
      boxArrayX[destiny] = 0;
      boxArrayY[destiny] = 0;

      counter++;
    }
  }
  console.log('Closing collection log');
  closeThing2();
}
function collectResources3() {
  var x = getRandomInt(248, 267);
  var y = getRandomInt(186, 193) + 534;
  scv.moveMouseSmooth(x, y);
  sleep(getRandomInt(600, 700));
  scv.mouseClick('right');
  sleep(getRandomInt(600, 700));
  scv.moveMouseSmooth(x, y + 43);
  sleep(getRandomInt(600, 700));
  scv.mouseClick();
  sleep(getRandomInt(3500, 4000));
  console.log('collecting');
  var boxArrayX = [
    getRandomInt(68, 85) + 779,
    getRandomInt(68, 85) + 779,
    getRandomInt(68, 85) + 111 + 779,
    getRandomInt(68, 85) + 111 + 779,
    getRandomInt(68, 85) + 222 + 779,
    getRandomInt(68, 85) + 222 + 779,
    getRandomInt(68, 85) + 333 + 779,
    getRandomInt(68, 85) + 333 + 779,
  ];

  var boxArrayY = [
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
    getRandomInt(155, 173) + 534,
    getRandomInt(155, 173) + 82 + 534,
  ];
  var counter = 0;
  while (counter < 8) {
    var destiny = getRandomInt(0, 7);
    if (boxArrayX[destiny] != 0 && boxArrayY[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouseSmooth(boxArrayX[destiny], boxArrayY[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(150, 230));
      boxArrayX[destiny] = 0;
      boxArrayY[destiny] = 0;

      counter++;
    }
  }
  console.log('Closing collection log');
  closeThing3();
}
function // used in sycn with collecting resources
closeThing() {
  scv.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}
function closeThing2() {
  scv.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125) + 534);

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}
function closeThing3() {
  scv.moveMouseSmooth(
    getRandomInt(551, 556) + 779,
    getRandomInt(111, 125) + 779
  );

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    scv.mouseClick();
    sleep(231);
  }
}
function // pestle/knife/chisel/hammer
simpleDeposit1() {
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
  scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0]);
  sleep(getRandomInt(50, 150));
  scv.mouseClick();
  //a1
  var counter1 = 0;

  while (counter1 < 2) {
    var destiny = getRandomInt(1, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(50, 150));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
}
function // pestle/knife/chisel/hammer
simpleDeposit2() {
  sleep(getRandomInt(601, 1199));
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
  scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0] + 534);
  sleep(getRandomInt(50, 150));
  scv.mouseClick();
  //a2
  var counter1 = 0;

  while (counter1 < 2) {
    var destiny = getRandomInt(1, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
      scv.mouseClick();
      sleep(getRandomInt(50, 150));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
}
function advancedDeposit1() {
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

  //a1
  var counter1 = 0;

  while (counter1 < 7) {
    var destiny = getRandomInt(0, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(50, 150));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
  if (X_herbArray[0] != 0) {
    scv.moveMouse(X_herbArray[0], Y_herbArray[0]);
    scv.mouseClick();
  }
  sleep(getRandomInt(601, 799));
  if (X_herbArray[17] != 0) {
    scv.moveMouse(X_herbArray[10], Y_herbArray[10]);
    scv.mouseClick();
  }

  sleep(getRandomInt(601, 799));
  if (X_herbArray[27] != 0) {
    scv.moveMouseSmooth(X_herbArray[27], Y_herbArray[27]);
    sleep(getRandomInt(101, 199));
    scv.mouseClick();
  }
}
function advancedDeposit2() {
  sleep(getRandomInt(601, 1199));
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

  //a2
  var counter1 = 0;

  while (counter1 < 7) {
    var destiny = getRandomInt(0, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
      scv.mouseClick();
      sleep(getRandomInt(50, 150));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
  if (X_herbArray[0] != 0) {
    scv.moveMouse(X_herbArray[0], Y_herbArray[0] + 534);
    scv.mouseClick();
  }
  sleep(getRandomInt(601, 799));
  if (X_herbArray[10] != 0) {
    scv.moveMouse(X_herbArray[10], Y_herbArray[10] + 534);
    scv.mouseClick();
  }
  sleep(getRandomInt(601, 799));
  if (X_herbArray[27] != 0) {
    scv.moveMouseSmooth(X_herbArray[27], Y_herbArray[27] + 534);
    sleep(getRandomInt(101, 199));
    scv.mouseClick();
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                              functions under developments                                                                    //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function moveHand(targetx, targety) {
  // Speed up the mouse.
  scv.setMouseDelay(2);

  var yidaNumber = Math.PI * 1.4;

  var height = targetx;
  var width = targety;

  for (var x = 0; x < width; x++) {
    var y = height * Math.sin((yidaNumber * x) / width) + height;
    scv.moveMouse(x, y);
  }
  scv.moveMouseSmooth(targetx, targety);
}
function // cut pineapple/tree logs
DuoCut() {
  var yida = 0;
  var randomTimer = getRandomInt(500, 1000);
  for (var i = 0; i < randomTimer; i++) {
    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    // click the location of 3rd row, 8th position
    var x = 3;
    var y = 3;
    // movemouse to the 3rd row,7th column 381, 198

    var xlocation = getRandomInt(381 - x, 381 + x);
    var ylocation = getRandomInt(198 - y, 198 + y);
    scv.moveMouseSmooth(xlocation, ylocation);
    sleep(getRandomInt(120, 230));
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();

    closeBank1();

    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
    // b1

    scv.moveMouseSmooth(xlocation, ylocation + 534);
    sleep(getRandomInt(120, 230));
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3) + 534
    );
    scv.mouseClick();

    closeBank2();

    console.log(' harvesting vespian gas ');
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
    /*
          Optional Arrays
    var X_herbArray2 = [
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
    ];*/
    /*var Y_herbArray2 = [
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
      getRandomInt(247, 258) + 534,
      getRandomInt(283, 296) + 534,
      getRandomInt(321, 332) + 534,
      getRandomInt(358, 371) + 534,
      getRandomInt(389, 406) + 534,
      getRandomInt(431, 444) + 534,
      getRandomInt(463, 479) + 534,
    ];
*/
    //a2

    scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0]);
    sleep(getRandomInt(134, 280));
    scv.mouseClick();
    sleep(getRandomInt(634, 780));

    var destiny = getRandomInt(1, 27);

    scv.moveMouseSmooth(X_herbArray[destiny], Y_herbArray[destiny]);
    sleep(getRandomInt(134, 280));
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(getRandomInt(235, 290), getRandomInt(433, 460));
    scv.mouseClick();
    sleep(getRandomInt(134, 280));
    scv.mouseClick();

    scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0] + 534);
    sleep(getRandomInt(134, 280));
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(X_herbArray[destiny], Y_herbArray[destiny] + 534);
    sleep(getRandomInt(134, 280));
    scv.mouseClick();
    tick(getRandomInt(700, 800));
    scv.moveMouseSmooth(getRandomInt(235, 290), getRandomInt(433, 460) + 534);
    scv.mouseClick();
    sleep(getRandomInt(134, 280));
    scv.mouseClick();

    // Sleep accordingly depending on the task performed : nest/gem/log/knife/hammer/pestle/...
    //
    sleep(getRandomInt(9300, 11130));
    //
    //

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    simpleDeposit1();

    sleep(getRandomInt(1200, 2000));

    scv.moveMouseSmooth(
      getRandomInt(256, 256 + 97),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));

    simpleDeposit2();
    yida++;
    console.log(yida + ' cycle sucessful');
  }
}



function // used to make 2tick pizzas
DuoMakePizza() {
  // top left
  scv.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
  var X_firstHalf = [
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
  ];
  var X_secondHalf = [
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
  var Y_firstHalf = [
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
  ];
  var Y_secondHalf = [
    getRandomInt(358, 371),
    getRandomInt(358, 371),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(389, 406),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(431, 444),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
    getRandomInt(463, 479),
  ];

  //bottom left
  var X1_firstHalf = [
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
  ];
  var X1_secondHalf = [
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
  var Y1_firstHalf = [
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(247, 258) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(283, 296) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(321, 332) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
  ];
  var Y1_secondHalf = [
    getRandomInt(358, 371) + 534,
    getRandomInt(358, 371) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(389, 406) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(431, 444) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
    getRandomInt(463, 479) + 534,
  ];
  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));

  var x = 3;
  var y = 3;
  // movemouse to the 3rd row,7th column 381, 198

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(198 - y, 198 + y);
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(getRandomInt(429 - 4, 429 + 4), getRandomInt(198 - 3, 198 + 3));
  scv.mouseClick();

  closeBank1();
  tick(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  scv.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X_firstHalf[temp],
    Y_firstHalf[temp] + getRandomInt(42, 43)
  );
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);

  scv.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  scv.mouseClick();

  // random mousemovement
  scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);


  // b1

  var xlocation = getRandomInt(381 - x, 381 + x);
  var ylocation = getRandomInt(163 - y, 163 + y) + 534;
  scv.moveMouseSmooth(xlocation, ylocation);

  scv.mouseClick('right');

  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(xlocation, ylocation + 85);
  scv.mouseClick();

  tick(getRandomInt(700, 800));
  scv.moveMouse(
    getRandomInt(429 - 4, 429 + 4),
    getRandomInt(163 - 3, 163 + 3) + 534
  );
  scv.mouseClick();

  closeBank2();
  tick(getRandomInt(700, 800));
  var temp3 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
  scv.mouseClick('right');
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(
    X1_firstHalf[temp3],
    Y1_firstHalf[temp3] + getRandomInt(42, 43)
  );
  scv.mouseClick('left');
  var temp4 = getRandomInt(0, 13);
  scv.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
  scv.mouseClick();
  tick(getRandomInt(700, 800));
  scv.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  scv.mouseClick();

  sleep(getRandomInt(9400, 10700));

  scv.moveMouseSmooth(getRandomInt(256, 256 + 97), getRandomInt(190, 190 + 53));
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(256, 256 + 97),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                              Command Line Interface for terminal launchs                                                     //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function CommandCenter() {
  const satoshi = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Command Center Terminal> ',
  });
  satoshi.prompt();
  satoshi
    .on('line', (line) => {
      switch (line.trim()) {
        case 'manual':
          console.log(
            'A1=finite 3tick3rdrow\n, A2=finit 1tick3rdrow\n, A6=infinite 3tick3rdrow\n, A5=infinit 1tick3rdrow\n, A4= finit food/pizza \n, A7=infinite solomix/clean for 1 SCV\n, A8=infinite solomix/clean for 2 SCV\n, mix\n, mix2\n, clean\n, clean2\n, clean3\n, loginboth\n,  logoutboth\n,  log1\n,  log2\n,  repoboth\n,  collectboth\n, R1T1\n,  R1T2\n,  R1T3\n, '
          );
          break;
        case 'mix':
          console.log('');
          SoloMix();
          break;
        case 'mix2':
          console.log('');
          DuoMix();
          break;
        case 'clean':
          console.log('');
          SoloClean();
          break;
        case 'clean2':
          console.log('');
          DuoClean();
          break;

        case 'loginboth':
          console.log('');
          login1();
          login2();
          break;

        case 'logoutboth':
          console.log('');
          logOut1();
          logOut2();
          break;

        case 'repoboth':
          console.log('');
          reposition1();
          reposition2();

          break;

        case 'collectboth':
          console.log('');
          collectResources1();
          collectResources2();
          break;

        case 'R1T1':
          console.log('one tick first row');
          DuoMake1stRow1tick();
          break;
        case 'R1T2':
          console.log('two tick first row');
          DuoMake1stRow2tick();
          break;
        case 'R1T3':
          console.log('three tick first row');
          DuoMake1stRow3tick();
          break;

        case 'solomix':
          console.log('solo mix');
          SoloMix();
          break;

        case 'soloclean':
          console.log('solo clean');
          SoloClean();
          break;

        case 'R2T2':
          console.log('');
          DuoMake2ndRow2tick();
          break;

        case 'R3T3':
          console.log('');
          DuoMake3rdRow3tick();
          break;

        case 'login':
          console.log('logging in for you');
          login1();
          break;
        case 'logout':
          console.log('logging out for you');
          logOut1();
          break;

        case 'bank':
          console.log('accesing bank');
          openBank();
          break;
        case 'closebank':
          console.log('closing bank');
          closeBank1();
          break;
        case 'A1':
          console.log('');
          Algorithm1();
          process.exit(0);
        case 'A2':
          console.log('');
          Algorithm2();
          process.exit(0);
        case 'A3':
          console.log('');
          Algorithm3();
          process.exit(0);
        case 'AX':
          console.log('');
          AlgorithmX();
          process.exit(0);
        case 'A4':
          console.log('');
          Algorithm4();
          process.exit(0);
        case 'A5':
          console.log('starting herb production for infinite minutes');
          Algorithm5();
          process.exit(0);
        case 'A6':
          console.log('starting fletch production for infinite minutes');
          Algorithm6();
          process.exit(0);
        case 'A7':
          console.log('mixing loop then solo cleaning for 1');
          Algorithm7();
          process.exit(0);
        case 'A8':
          console.log('mixing loop then solo cleaning for 2');
          Algorithm8();
          process.exit(0);
        default:
          console.log(`Wrong command, read the manual.'${line.trim()}'`);
          break;
      }
      satoshi.prompt();
    })
    .on('close', () => {
      // basically ctrl +c  here smart shortcut    but ultimately pointless
      console.log('Going to sleep mode!');
      process.exit(0);
    });
}

//
//
//
//                https://github.com/yida-li/Gaming-Bots
//
//
//
//
// test :: testing during development stage
//                fastlogin2();DuoCut();
//                reposition();

//
// cmd :: running CommandCenter() on launch

CommandCenter();
