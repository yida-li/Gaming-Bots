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
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();
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
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53)
      );
      scv.mouseClick();
      sleep(getRandomInt(634, 780));
      scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
      scv.mouseClick();

      sleep(getRandomInt(1200, 2000));

      scv.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53) + 534
      );
      scv.mouseClick();
      sleep(getRandomInt(634, 780));

      scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
      scv.mouseClick();

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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();
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
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
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
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    scv.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    scv.mouseClick();

    scv.moveMouseSmooth(
      getRandomInt(234, 234 + 107) + 779,
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53)
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));
  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  scv.mouseClick();

  sleep(getRandomInt(1200, 2000));

  scv.moveMouseSmooth(
    getRandomInt(234, 234 + 107),
    getRandomInt(190, 190 + 53) + 534
  );
  scv.mouseClick();
  sleep(getRandomInt(634, 780));

  scv.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
  scv.mouseClick();
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
      DuoMake3rdRow1tick();
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
        console.log('fletch cook herb');
        break;

      case 'fletch':
        console.log('harvesting vespian gas');
        DuoMake1stRow1tick();
        break;

      case 'cook':
        console.log('creating supplies');
        DuoMake2ndRow2tick();
        break;

      case 'herb':
        console.log('mining minerals');
        DuoMake3rdRow3tick();
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
//  Edit at https://github.com/yida-li/Gaming-Bots
//
//  Cmds ::
//
//  TrioClean();

//
//  DuoCombinationBoilderPlate();
//  DuoClean();
//  Algorithm1();

//  SoloClean(60000 / 28);

//
//  DuoMakeSupply();DuoMake1stRow1tick();
//  SoloMix(amount of herbs / 14 inventory slot );
CommandCenter();