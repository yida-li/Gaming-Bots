//T-280 space construction vehicle is a type of terran general-purpose engineering vehicle.
// the only dependencies needed for this segment of my consciousnesss
var spc = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}

function //  slowly combining the clean herb with vial of water in a designated location
GatherResources() {
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
  spc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
  spc.mouseClick();
  sleep(getRandomInt(700, 800));
  spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
  spc.mouseClick();
  sleep(getRandomInt(700, 800));

  sleep(getRandomInt(700, 800));
  prayerToggle1();

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

  sleep(getRandomInt(700, 800));
  var temp = getRandomInt(0, 13);
  spc.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  spc.mouseClick();
  sleep(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);
  spc.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  spc.mouseClick();
  sleep(getRandomInt(700, 800));
  spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  spc.mouseClick();

  sleep(9000);
  spc.moveMouseSmooth(264, 172);
  spc.mouseClick();

  sleep(getRandomInt(1200, 2000));

  //spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  //spc.mouseClick();
}
function // slowly combining the clean herb with vial of water in a designated location with 2 svcs
GatherResources2() {
  var time = 0;
  // change 3000 to any amount of time
  while (time < 3000) {
    time++;
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

    //  a1
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    spc.mouseClick('right');
    sleep(getRandomInt(700, 800));
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
    spc.mouseClick();
    sleep(getRandomInt(700, 800));
    spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
    spc.mouseClick();
    sleep(getRandomInt(700, 800));

    // a1
    prayerToggle1();

    spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371));
    spc.mouseClick();
    sleep(getRandomInt(200, 300));
    spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406));
    spc.mouseClick();
    sleep(622);
    spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
    spc.mouseClick();

    // b1
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    spc.mouseClick('right');
    sleep(getRandomInt(700, 800));
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214) + 534);
    spc.mouseClick();
    sleep(getRandomInt(700, 800));
    spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129) + 534);
    spc.mouseClick();

    //b1
    prayerToggle2();

    spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371) + 534);
    spc.mouseClick();
    sleep(getRandomInt(200, 300));
    spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406) + 534);
    spc.mouseClick();
    sleep(622);
    spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
    spc.mouseClick();

    sleep(5000);
    //a1
    
    
    spc.moveMouseSmooth(getRandomInt(234,234+107), getRandomInt(190,190+53));
    spc.mouseClick();
    sleep(getRandomInt(634, 780));
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    spc.mouseClick();

    sleep(getRandomInt(1200, 2000));

    spc.moveMouseSmooth(getRandomInt(234,234+107), getRandomInt(190,190+53)+534);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    spc.mouseClick();
  }
}
function // slowly combining the clean herb with vial of water in a designated location with 2 svcs
GatherResources3() {
  var time = 0;
  // change 3000 to any amount of time
  while (time < 2) {
    time++;
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

    taskA1();

    taskB1();

    taskC1();

    // bank and deposite A1
    spc.moveMouse(264, 172);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    spc.mouseClick();

    sleep(getRandomInt(1200, 2000));
    // bank and deposite B1
    spc.moveMouse(264, 172 + 534);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));

    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    spc.mouseClick();
    // bank and deposite C1
    spc.moveMouse(264 + 775, 172 + 534);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));

    spc.moveMouseSmooth(
      getRandomInt(432, 454) + 775,
      getRandomInt(327, 342) + 534
    );
    spc.mouseClick();
  }
}

// procedures
function taskA1() {
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
  spc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  prayerToggle1();
  spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371));
  spc.mouseClick();
  sleep(getRandomInt(200, 300));
  spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406));
  spc.mouseClick();
  sleep(getRandomInt(200, 300));
  spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    spc.mouseClick();
  }
}
function taskB1() {
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
  spc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214) + 534);
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129) + 534);
  spc.mouseClick();
  prayerToggle2();
  spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371) + 534);
  spc.mouseClick();
  sleep(getRandomInt(200, 300));
  spc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406) + 534);
  spc.mouseClick();
  sleep(getRandomInt(200, 300));
  spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    spc.mouseClick();
  }
}
function taskC1() {
  // c1
  spc.moveMouseSmooth(
    getRandomInt(227, 243) + 775,
    getRandomInt(120, 129) + 534
  );
  spc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(
    getRandomInt(227, 243) + 775,
    getRandomInt(213, 214) + 534
  );
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(
    getRandomInt(282, 289) + 775,
    getRandomInt(120, 129) + 534
  );
  spc.mouseClick();

  //c1
  prayerToggle4();

  spc.moveMouseSmooth(
    getRandomInt(576, 586) + 775,
    getRandomInt(358, 371) + 534
  );
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(
    getRandomInt(576, 586) + 775,
    getRandomInt(389, 406) + 534
  );
  spc.mouseClick();
  sleep(getRandomInt(601, 800));
  spc.moveMouseSmooth(
    getRandomInt(227, 290) + 775,
    getRandomInt(433, 480) + 534
  );
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    spc.mouseClick();
  }
}

function // instantly click all grimmy herbs
CleaningVesispianGase1() {
  var yida = 0;
  for (var i = 0; i < 40000; i++) {
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    spc.mouseClick();
    //close bank

    spc.moveMouseSmooth(getRandomInt(484, 494), getRandomInt(43, 53));
    spc.mouseClick();

    //take herb at 4th location
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    spc.mouseClick();

    sleep(getRandomInt(600, 1200));

    console.log('swiping digital farms');
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
        spc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        spc.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }
    sleep(getRandomInt(2000, 2500));

    //banker
    spc.moveMouseSmooth(264, 172);
    spc.mouseClick();

    sleep(getRandomInt(1200, 2000));
    //bankcccc
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    spc.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
  }
}

function // instantly click all grimmy herbs with 2 svcs
CleaningVesispianGase2() {
  var yida = 0;
  for (var i = 0; i < 1300; i++) {
    //take herb at 4th location
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    spc.mouseClick();
    //close bank

    spc.moveMouseSmooth(getRandomInt(484, 494), getRandomInt(43, 53));
    spc.mouseClick();

    //take herb at 4th location
    spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    spc.mouseClick();
    //close bank

    spc.moveMouseSmooth(getRandomInt(484, 494), getRandomInt(43, 53) + 534);
    spc.mouseClick();

    console.log('swiping digital farms');
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
        spc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        spc.mouseClick();
        spc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        spc.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }
    sleep(5000);
    //a1
    spc.moveMouseSmooth(264, 172);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    spc.mouseClick();

    sleep(getRandomInt(1200, 2000));

    spc.moveMouseSmooth(264, 172 + 534);
    spc.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    spc.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
  }
}

function //  open herb box
ShowMeTheMoney() {
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
      spc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
      spc.mouseClick('right');

      spc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 40);
      spc.mouseClick();
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter++;
    }
  }
}

function prayerToggle1() {
  spc.moveMouseSmooth(557, 121);
  spc.mouseClick();
  sleep(231);
  spc.mouseClick();
}
function prayerToggle2() {
  spc.moveMouseSmooth(557, 121 + 534);
  spc.mouseClick();
  sleep(231);
  spc.mouseClick();
}
function prayerToggle3() {
  spc.moveMouseSmooth(557 + 775, 121);
  spc.mouseClick();
  sleep(231);
  spc.mouseClick();
}
function prayerToggle4() {
  spc.moveMouseSmooth(557 + 775, 121 + 534);
  spc.mouseClick();
  sleep(231);
  spc.mouseClick();
}
//function that returns random interger between floor and ceiling with
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//testing commands
//GatherResources();
GatherResources2();
//GatherResources3();
//CleaningVesispianGase1();
//CleaningVesispianGase2();
//CleaningVesispianGase3();
//ShowMeTheMoney();
