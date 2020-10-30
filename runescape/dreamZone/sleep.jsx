var yida = require('robotjs');



// Dual Core Dream Bot 1.0





// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
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



function // slowly combining the clean herb with vial of water in a designated location with 2 svcs with random intervals+ random combination elements
UnfinishedPotion() {
  while (true) {
    var time = 0;
    var arbitrairy = getRandomInt(100, 200);
    //    randomlly 100,200 cycle interval
    while (time < arbitrairy) {
      time++;

      // top left
    yida.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
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
    yida.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));




      var x= 3;
      var y= 3;
      // movemouse to the 3rd row,7th column 381, 198

      var xlocation=getRandomInt(381-x, 381+x);
      var ylocation=getRandomInt(198-y, 198+y);
      yida.moveMouseSmooth(xlocation, ylocation);

    yida.mouseClick('right');


      tick(getRandomInt(700, 800));
    yida.moveMouseSmooth(xlocation, ylocation+85);
    yida.mouseClick();

      tick(getRandomInt(700, 800));
    yida.moveMouse(getRandomInt(429-4,429+4), getRandomInt(198-3,198+3));
    yida.mouseClick();

      // a1
      closeBank();
      tick(getRandomInt(700, 800));
      var temp = getRandomInt(0, 13);
    yida.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
    yida.mouseClick();
      tick(getRandomInt(700, 800));
      var temp2 = getRandomInt(0, 13);
    yida.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
    yida.mouseClick();
      tick(getRandomInt(700, 800));
    yida.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
    yida.mouseClick();

      // random mousemovement
    yida.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);



      // b1

      var xlocation=getRandomInt(381-x, 381+x);
      var ylocation=getRandomInt(198-y, 198+y)+534;
      yida.moveMouseSmooth(xlocation, ylocation);

    yida.mouseClick('right');


      tick(getRandomInt(700, 800));
    yida.moveMouseSmooth(xlocation, ylocation+85);
    yida.mouseClick();

      tick(getRandomInt(700, 800));
    yida.moveMouse(getRandomInt(429-4,429+4), getRandomInt(198-3,198+3)+534);
    yida.mouseClick();



      closeBank2();
      tick(getRandomInt(700, 800));
      var temp3 = getRandomInt(0, 13);
    yida.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
    yida.mouseClick();
      var temp4 = getRandomInt(0, 13);
    yida.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
    yida.mouseClick();
      tick(getRandomInt(700, 800));
    yida.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
    yida.mouseClick();

      sleep(getRandomInt(4300, 4700));

    yida.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53)
      );
    yida.mouseClick();
      sleep(getRandomInt(634, 780));
    yida.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    yida.mouseClick();

      sleep(getRandomInt(1200, 2000));

    yida.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53) + 534
      );
    yida.mouseClick();
      sleep(getRandomInt(634, 780));
      
    yida.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    yida.mouseClick();

    
      console.log(time + 'gas harvested');
    }
  }
  layer5(); // rest up to 42.526 milliseconds
}


function closeBank() {
yida.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
  yida.mouseClick();
    sleep(231);
  }
}
function closeBank2() {
yida.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125) + 534);
  for (var i = 0; i < getRandomInt(1, 2); i++) {
  yida.mouseClick();
    sleep(231);
  }
}


function // instantly click all grimmy herbs with 2 svcs
CleanHerbs() {
  var yida = 0;
  for (var i = 0; i < 1300; i++) {
    // random mousemovement
    yida.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
    // click the location of 3rd row, 8th position
    yida.moveMouse(getRandomInt(429-4,429+4), getRandomInt(198-3,198+3));
    yida.mouseClick();
    sleep(getRandomInt(700, 800));
    closeBank();


    yida.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332) + 534);
    // b1

    yida.moveMouse(getRandomInt(429-4,429+4), getRandomInt(198-3,198+3)+534);
    yida.mouseClick();
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
        yida.moveMouse(X_herbArray[destiny], Y_herbArray[destiny]);
        yida.mouseClick();
        yida.moveMouse(X_herbArray[destiny], Y_herbArray[destiny] + 534);
        yida.mouseClick();
        X_herbArray[destiny] = 0;
        Y_herbArray[destiny] = 0;

        counter++;
      }
    }

    sleep(getRandomInt(2300, 3130));

    yida.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53)
    );
    yida.mouseClick();
    sleep(getRandomInt(634, 780));
    yida.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
    yida.mouseClick();

    yida.moveMouseSmooth(
      getRandomInt(234, 234 + 107),
      getRandomInt(190, 190 + 53) + 534
    );
    yida.mouseClick();
    sleep(getRandomInt(634, 780));
    //bankcccc
    yida.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
    yida.mouseClick();

    yida++;
    console.log(yida + ' cycle sucessful');
  }
}
//
//  https://github.com/yida-li/Gaming-Bots
//
//Cmds












