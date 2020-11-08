// dependencies/libraries/packages/bundles/extensions
var scv = require('robotjs');
const readline = require('readline');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

// function that displays game tick
function tick() {
  console.log('1tick');
  sleep(611);
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
    closeBank();
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

    sleep(getRandomInt(8100, 8500));

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107),
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
  while (true) {
    var time = 0;
    var arbitrairy = getRandomInt(100, 200);
    //    randomlly 100,200 cycle interval
    while (time < arbitrairy) {
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
      closeBank();
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
        getRandomInt(236, 236 + 107),
        getRandomInt(190, 190 + 53)
      );
      scv.mouseClick();
      sleep(getRandomInt(634, 780));
      advancedDeposit1();

      sleep(getRandomInt(1200, 2000));

      scv.moveMouseSmooth(
        getRandomInt(236, 236 + 107),
        getRandomInt(190, 190 + 53) + 534
      );
      scv.mouseClick();
      sleep(getRandomInt(634, 780));

      advancedDeposit2();

      console.log(time + 'gas harvested');
    }
  }
  layer5(); // rest up to 42.526 milliseconds
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

function closeBank() {
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
  for (var i = 0; i < 10000; i++) {
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank();
    sleep(getRandomInt(351, 612));
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

        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2400, 2500));

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    advancedDeposit1();
  }
}
function // instantly click all grimmy herbs with 2 svcs
DuoClean() {
  var yida = 0;
  for (var i = 0; i < 1300; i++) {
    // random mousemovement
    scv.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    // click the location of 3rd row, 8th position
    scv.moveMouse(
      getRandomInt(429 - 4, 429 + 4),
      getRandomInt(198 - 3, 198 + 3)
    );
    scv.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank();

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

    sleep(getRandomInt(2300, 3130));

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    scv.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
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
    closeBank();
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
      getRandomInt(236, 236 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(236, 236 + 107) + 779,
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
  closeBank();
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

  sleep(getRandomInt(6100, 6700));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
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

  closeBank();
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

  sleep(getRandomInt(6100, 6700));
  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  advancedDeposit1();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(236, 236 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  advancedDeposit2();
}

// custum rule
function Algorithm1() {
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

// custum rule reverse of A1
function Algorithm2() {
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

// Completely insane Arbitrary Algorithmn
function Algorithm3() {
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
// cross dual supply algorithmn fletch  50/50 cook/fletch
function Algorithm4() {
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

function login1() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326));
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
  // close the menu that pops up
  scv.moveMouseSmooth(getRandomInt(298, 469), getRandomInt(335, 382));
  scv.mouseClick();
}
function login2() {
  scv.moveMouseSmooth(getRandomInt(407, 520), getRandomInt(305, 326) + 534);
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
  // close the menu that pops up
  scv.moveMouseSmooth(getRandomInt(298, 469), getRandomInt(335, 382) + 534);
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
//turn to face bank
function moveHand(targetx, targety) {
  // Speed up the mouse.
  scv.setMouseDelay(2);

  var yidaNumber = Math.PI * 1.4;

  var height = targetx;
  var width = targety;

  for (var x = 0; x < width; x++) {
    y = height * Math.sin((yidaNumber * x) / width) + height;
    scv.moveMouse(x, y);
  }
  scv.moveMouseSmooth(targetx, targety);
}

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
}
function banktab1() {
  // currently 6th position

  var x = getRandomInt(314, 344);
  var y = getRandomInt(79, 91);
  scv.moveMouseSmooth(x, y);
  scv.mouseClick();
  sleep(getRandomInt(100, 200));
  scv.mouseClick();
  sleep(getRandomInt(600, 700));
  sleep(getRandomInt(600, 700));
  sleep(getRandomInt(600, 700));
}
function banktab2() {
  // currently 6th position

  var x = getRandomInt(314, 344);
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
function closeThing() {
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

function CommandCenter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Command Center Terminal> ',
  });

  rl.prompt();

  rl.on('line', (line) => {
    switch (line.trim()) {
      case 'manual':
        console.log('log1 cook herb');
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

      case 'bank':
        console.log('');
        openBank1();
        sleep(getRandomInt(4000, 5000));
        banktab1();
        openBank2();
        sleep(getRandomInt(4000, 5000));
        banktab2();

        break;

      case 'log1':
        console.log('');
        logOut1();
        break;
      case 'log2':
        console.log('');
        logOut2();
        break;

      case 'bank1':
        console.log('');
        openBank1();
        sleep(getRandomInt(4000, 5000));
        banktab1();
        break;

      case 'bank2':
        console.log('');
        openBank2();
        sleep(getRandomInt(4000, 5000));
        banktab2();
        break;

      case 'gas':
        console.log('harvesting vespian gas');
        DuoMake1stRow1tick();
        break;

      case 'solomix':
        console.log('solo mix');
        SoloMix();
        break;

      case 'soloclean':
        console.log('solo clean');
        SoloClean();
        break;

      case 'cook':
        console.log('creating supplies');
        DuoMake2ndRow2tick();
        break;

      case 'herb':
        console.log('mining minerals');
        DuoMake3rdRow3tick();
        break;

      case 'login':
        console.log('logging in for you');
        login();
        break;
      case 'logout':
        console.log('logging out for you');
        logOut();
        break;
      case 'repo':
        console.log('repositioning');
        reposition();
        break;
      case 'bank':
        console.log('accesing bank');
        openBank();
        break;
      case 'closebank':
        console.log('closing bank');
        closeBank();
        break;
      case 'A1':
        console.log('starting production for 360 minutes');
        Algorithm1();
        process.exit(0);
      case 'A2':
        console.log('starting production for 360 minutes');
        Algorithm2();
        process.exit(0);
      case 'A3':
        console.log('starting production for 360 minutes');
        Algorithm3();
        process.exit(0);
      case 'A4':
        console.log('starting production for 360 minutes');
        Algorithm4();
        process.exit(0);
      default:
        console.log(`Wrong command, read the manual.'${line.trim()}'`);
        break;
    }
    rl.prompt();
  }).on('close', () => {
    // basically ctrl +c  here smart shortcut    but ultimately pointless
    console.log('Going to sleep mode!');
    process.exit(0);
  });
}
//
//
//
//
// https://github.com/yida-li/Gaming-Bots

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

  //a2
  var counter1 = 0;
  var temp1 = getRandomInt(2, 6);
  while (counter1 < temp1) {
    var destiny = getRandomInt(0, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouseSmooth(X_herbArray[destiny], Y_herbArray[destiny]);
      scv.mouseClick();
      sleep(getRandomInt(100, 200));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
  if (X_herbArray[0] != 0) {
    scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0]);
    scv.mouseClick();
  } // in case of impossibility beyond imaginatino
}
function advancedDeposit2() {
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
  var temp1 = getRandomInt(2, 6);
  while (counter1 < temp1) {
    var destiny = getRandomInt(0, 27);
    if (X_herbArray[destiny] != 0 && Y_herbArray[destiny] != 0) {
      // time complexity applied, just coen 352, from data structures, from algorithm
      scv.moveMouseSmooth(X_herbArray[destiny], Y_herbArray[destiny] + 534);
      scv.mouseClick();
      sleep(getRandomInt(100, 200));
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter1++;
    }
  }
  if (X_herbArray[0] != 0) {
    scv.moveMouseSmooth(X_herbArray[0], Y_herbArray[0] + 534);
    scv.mouseClick();
  } // in case of impossibility beyond imaginatino
}
function boxOfCommands() {
  openBank1();
  sleep(4000);
  banktab1();
  openBank2();
  sleep(4000);
  banktab2();
  closeBank();
  closeBank2();
  logOut1();
  logOut2();
  reposition1();
  reposition2();
  sleep(5000);
  collectResources1();
  collectResources2();
}
//CommandCenter();
advancedDeposit1();
