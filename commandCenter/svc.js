//T-280 space construction vehicle is a type of terran general-purpose engineering vehicle.
// the only dependencies needed for this segment of my consciousnesss
var svc = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}

function //  slowly combining the clean herb with vial of water in a designated location
GatherResources() {
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
  svc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
  svc.mouseClick();
  sleep(getRandomInt(700, 800));
  svc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
  svc.mouseClick();
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
  svc.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
  svc.mouseClick();
  sleep(getRandomInt(700, 800));
  var temp2 = getRandomInt(0, 13);
  svc.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
  svc.mouseClick();
  sleep(getRandomInt(700, 800));
  svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  svc.mouseClick();

  sleep(9000);
  svc.moveMouseSmooth(264, 172);
  svc.mouseClick();

  sleep(getRandomInt(1200, 2000));

  //svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
  //svc.mouseClick();
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
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    svc.mouseClick('right');
    sleep(getRandomInt(700, 800));
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
    svc.mouseClick();
    sleep(getRandomInt(700, 800));
    svc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
    svc.mouseClick();
    sleep(getRandomInt(700, 800));

    // a1
    prayerToggle1();

    svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371));
    svc.mouseClick();
    sleep(getRandomInt(200, 300));
    svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406));
    svc.mouseClick();
    sleep(622);
    svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
    svc.mouseClick();

    // b1
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    svc.mouseClick('right');
    sleep(getRandomInt(700, 800));
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214) + 534);
    svc.mouseClick();
    sleep(getRandomInt(700, 800));
    svc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129) + 534);
    svc.mouseClick();

    //b1
    prayerToggle2();

    svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371) + 534);
    svc.mouseClick();
    sleep(getRandomInt(200, 300));
    svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406) + 534);
    svc.mouseClick();
    sleep(622);
    svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
    svc.mouseClick();

    sleep(5000);
    //a1

    svc.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    svc.mouseClick();
    sleep(getRandomInt(634, 780));
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    svc.mouseClick();

    sleep(getRandomInt(1200, 2000));

    svc.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    svc.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    svc.mouseClick();
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
    svc.moveMouse(264, 172);
    svc.mouseClick();
    sleep(getRandomInt(634, 780));
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    svc.mouseClick();

    sleep(getRandomInt(1200, 2000));
    // bank and deposite B1
    svc.moveMouse(264, 172 + 534);
    svc.mouseClick();
    sleep(getRandomInt(634, 780));

    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    svc.mouseClick();
    // bank and deposite C1
    svc.moveMouse(264 + 775, 172 + 534);
    svc.mouseClick();
    sleep(getRandomInt(634, 780));

    svc.moveMouseSmooth(
      getRandomInt(432, 454) + 775,
      getRandomInt(327, 342) + 534
    );
    svc.mouseClick();
  }
}

// procedures
function taskA1() {
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
  svc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129));
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  prayerToggle1();
  svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371));
  svc.mouseClick();
  sleep(getRandomInt(200, 300));
  svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406));
  svc.mouseClick();
  sleep(getRandomInt(200, 300));
  svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    svc.mouseClick();
  }
}
function taskB1() {
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
  svc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214) + 534);
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129) + 534);
  svc.mouseClick();
  prayerToggle2();
  svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(358, 371) + 534);
  svc.mouseClick();
  sleep(getRandomInt(200, 300));
  svc.moveMouseSmooth(getRandomInt(576, 586), getRandomInt(389, 406) + 534);
  svc.mouseClick();
  sleep(getRandomInt(200, 300));
  svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    svc.mouseClick();
  }
}
function taskC1() {
  // c1
  svc.moveMouseSmooth(
    getRandomInt(227, 243) + 775,
    getRandomInt(120, 129) + 534
  );
  svc.mouseClick('right');
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(
    getRandomInt(227, 243) + 775,
    getRandomInt(213, 214) + 534
  );
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(
    getRandomInt(282, 289) + 775,
    getRandomInt(120, 129) + 534
  );
  svc.mouseClick();

  //c1
  prayerToggle4();

  svc.moveMouseSmooth(
    getRandomInt(576, 586) + 775,
    getRandomInt(358, 371) + 534
  );
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(
    getRandomInt(576, 586) + 775,
    getRandomInt(389, 406) + 534
  );
  svc.mouseClick();
  sleep(getRandomInt(601, 800));
  svc.moveMouseSmooth(
    getRandomInt(227, 290) + 775,
    getRandomInt(433, 480) + 534
  );
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    svc.mouseClick();
  }
}

function // instantly click all grimmy herbs
CleaningVesispianGase1() {
  var yida = 0;
  for (var i = 0; i < 40000; i++) {
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    svc.mouseClick();
    //close bank

    svc.moveMouseSmooth(getRandomInt(484, 494), getRandomInt(43, 53));
    svc.mouseClick();

    //take herb at 4th location
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    svc.mouseClick();

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
        svc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        svc.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }
    sleep(getRandomInt(2000, 2500));

    //banker
    svc.moveMouseSmooth(264, 172);
    svc.mouseClick();

    sleep(getRandomInt(1200, 2000));
    //bankcccc
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    svc.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
  }
}

function // slowly combining the clean herb with vial of water in a designated location with 2 svcs with random intervals+ random combination elements
GatherResourcesFinalSpeed() {
  while (true) {
    var time = 0;
    var arbitrairy = getRandomInt(100, 200);
    //    randomlly 100,200 cycle interval
    while (time < arbitrairy) {
      time++;

      // top left
      svc.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
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
      svc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
      //  a1
      svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
      svc.mouseClick();

      sleep(getRandomInt(700, 800));

      // a1
      prayerToggle1();
      sleep(getRandomInt(700, 800));
      var temp = getRandomInt(0, 13);
      svc.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
      svc.mouseClick();
      sleep(getRandomInt(700, 800));
      var temp2 = getRandomInt(0, 13);
      svc.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
      svc.mouseClick();
      sleep(getRandomInt(700, 800));
      svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
      svc.mouseClick();

      // random mousemovement
      svc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
      // b1

      svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
      svc.mouseClick();
      sleep(getRandomInt(700, 800));

      prayerToggle2();
      sleep(getRandomInt(700, 800));
      var temp3 = getRandomInt(0, 13);
      svc.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
      svc.mouseClick();
      var temp4 = getRandomInt(0, 13);
      svc.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
      svc.mouseClick();
      sleep(getRandomInt(700, 800));
      svc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
      svc.mouseClick();

      sleep(getRandomInt(4300, 4700));

      svc.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53)
      );
      svc.mouseClick();
      sleep(getRandomInt(634, 780));
      svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
      svc.mouseClick();

      sleep(getRandomInt(1200, 2000));

      svc.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53) + 534
      );
      svc.mouseClick();
      sleep(getRandomInt(634, 780));
      //bankcccc
      svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
      svc.mouseClick();

      //

      console.log(time + 'gas harvested');
    }
  }
  layer5(); // rest up to 42.526 milliseconds
}

function // instantly click all grimmy herbs with 2 svcs
CleaningVesispianGase2() {
  var yida = 0;
  for (var i = 0; i < 1300; i++) {
    // random mousemovement
    svc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    //  a1
    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
    svc.mouseClick();

    sleep(getRandomInt(700, 800));

    // a1
    prayerToggle1();

    svc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
    // b1

    svc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
    svc.mouseClick();
    sleep(getRandomInt(700, 800));

    prayerToggle2();

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
        svc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        svc.mouseClick();
        svc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        svc.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2300, 3130));

    svc.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    svc.mouseClick();
    sleep(getRandomInt(634, 780));
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    svc.mouseClick();

    svc.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    svc.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    svc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    svc.mouseClick();

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
      svc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
      svc.mouseClick('right');

      svc.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 40);
      svc.mouseClick();
      X_herbArray[destiny] = 0;
      Y_herbArray[destiny] = 0;

      counter++;
    }
  }
}

function prayerToggle1() {
  svc.moveMouseSmooth(557, 121);
  svc.mouseClick();
  sleep(231);
  svc.mouseClick();
}
function prayerToggle2() {
  svc.moveMouseSmooth(557, 121 + 534);
  svc.mouseClick();
  sleep(231);
  svc.mouseClick();
}
function prayerToggle3() {
  svc.moveMouseSmooth(557 + 775, 121);
  svc.mouseClick();
  sleep(231);
  svc.mouseClick();
}
function prayerToggle4() {
  svc.moveMouseSmooth(557 + 775, 121 + 534);
  svc.mouseClick();
  sleep(231);
  svc.mouseClick();
}
//function that returns random interger between floor and ceiling with
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//testing commands
//GatherResources();
//GatherResources2();
//GatherResources3();
//CleaningVesispianGase1();
CleaningVesispianGase2();
//CleaningVesispianGase3();
//ShowMeTheMoney();
