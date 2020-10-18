//T-280 space construction vehicle is a type of terran general-purpose engineering vehicle.
// the only dependencies needed for this segment of my consciousnesss
var spc = require("robotjs");

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log("sleeping for " + ms + " ms");
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}

// function that displays game tick
function tick() {
  console.log("1tick");
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

// The steps to syncronization

// camera  set to verticle, log and facing north
// default zoom [ 0 ]

function // slowly combining the clean herb with vial of water in a designated location with 2 svcs with random intervals+ random combination elements
GatherResourcesFinalSpeed() {
  while(true){
    var time = 0;
    var arbitrairy =getRandomInt(100,200);
    //    randomlly 100,200 cycle interval
    while (time < arbitrairy) {
      time++;
  
      // top left
      spc.moveMouseSmooth(getRandomInt(600, 700), getRandomInt(1, 900));
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
      spc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332));
      //  a1
      spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129));
      spc.mouseClick("right");
      tick(getRandomInt(700, 800));
      spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(213, 214));
      spc.mouseClick();
  
      tick(getRandomInt(700, 800));
      spc.moveMouse(getRandomInt(282, 289), getRandomInt(120, 129));
      spc.mouseClick();
  
      // a1
      prayerToggle1();
      tick(getRandomInt(700, 800));
      var temp = getRandomInt(0, 13);
      spc.moveMouseSmooth(X_firstHalf[temp], Y_firstHalf[temp]);
      spc.mouseClick();
      tick(getRandomInt(700, 800));
      var temp2 = getRandomInt(0, 13);
      spc.moveMouseSmooth(X_secondHalf[temp2], Y_secondHalf[temp2]);
      spc.mouseClick();
      tick(getRandomInt(700, 800));
      spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480));
      spc.mouseClick();
  
  
       // random mousemovement
       spc.moveMouseSmooth(getRandomInt(0, 560), getRandomInt(0, 332)+534);
      // b1
  
      spc.moveMouseSmooth(getRandomInt(227, 243), getRandomInt(120, 129) + 534);
      spc.mouseClick("right");
      tick(getRandomInt(700, 800));
      spc.moveMouseSmooth(getRandomInt(232, 239), getRandomInt(213, 214) + 536);
      spc.mouseClick();
      tick(getRandomInt(700, 800));
      spc.moveMouseSmooth(getRandomInt(282, 289), getRandomInt(120, 129) + 534);
      spc.mouseClick();
  
      prayerToggle2();
      tick(getRandomInt(700, 800));
      var temp3 = getRandomInt(0, 13);
      spc.moveMouseSmooth(X1_firstHalf[temp3], Y1_firstHalf[temp3]);
      spc.mouseClick();
      var temp4 = getRandomInt(0, 13);
      spc.moveMouseSmooth(X1_secondHalf[temp4], Y1_secondHalf[temp4]);
      spc.mouseClick();
      tick(getRandomInt(700, 800));
      spc.moveMouseSmooth(getRandomInt(227, 290), getRandomInt(433, 480) + 534);
      spc.mouseClick();
  
      
      sleep(getRandomInt(4300, 4700));
  
     
      spc.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53)
      );
      spc.mouseClick();
      sleep(getRandomInt(634, 780));
      spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342));
      spc.mouseClick();
  
      sleep(getRandomInt(1200, 2000));
  
      spc.moveMouseSmooth(
        getRandomInt(234, 234 + 107),
        getRandomInt(190, 190 + 53) + 534
      );
      spc.mouseClick();
      sleep(getRandomInt(634, 780));
      //bankcccc
      spc.moveMouseSmooth(getRandomInt(432, 454), getRandomInt(327, 342) + 534);
      spc.mouseClick();
  
      //
  
      console.log(time + "gas harvested");
      
    }
   
  }
   layer5(); // rest up to 42.526 milliseconds
}

function clickBank1() {
  // Default colour for object marker at bank counter is FFFF00
  var img = spc.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ["514633", "373023", "8f891a", "5c523f", "9d9625"];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log("found action at : " + random_x + " " + random_y);

      spc.moveMouseSmooth(random_x, random_y);
      spc.mouseClick();

      return { random_x, random_y };
    }
  }
  return false;
}

function clickBank2() {
  // Default colour for object marker at bank counter is FFFF00
  var img = spc.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ["5c523f", "9d9625"];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 579);
    var random_y = getRandomInt(500, 897);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log("found action at : " + random_x + " " + random_y);

      spc.moveMouseSmooth(random_x, random_y);
      spc.mouseClick();

      return true;
    }
  }
  return false;
}

function clickBank3() {
  // Default colour for object marker at bank counter is FFFF00
  var img = spc.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ["483c2b", "8a8415", "483c2b"];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(775, 579 + 775);
    var random_y = getRandomInt(500, 897);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log("found action at : " + random_x + " " + random_y);

      spc.moveMouseSmooth(random_x, random_y);
      spc.mouseClick();

      return { random_x, random_y };
    }
  }
  return false;
}

function prayerToggle1() {
  spc.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125));

  for (var i = 0; i < getRandomInt(1, 2); i++) {
    spc.mouseClick();
    sleep(231);
  }
}
function prayerToggle2() {
  spc.moveMouseSmooth(getRandomInt(551, 556), getRandomInt(111, 125) + 534);
  for (var i = 0; i < getRandomInt(1, 2); i++) {
    spc.mouseClick();
    sleep(231);
  }
}

//
//https://github.com/yida-li/Gaming-Bots
//
//Cmds
GatherResourcesFinalSpeed();
