// importing the robotjs
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
  while (true) {
    var j = 0;
    while (j < 6) {
      var random_x = getRandomInt(30000, 38520);
      robot.moveMouse(583, 294);
      robot.mouseClick('right');
      sleep(642); 
      robot.moveMouseSmooth(583, 338);
      robot.mouseClick();
      sleep(4129);
      prayerToggle();
      j++;
      console.log('sleeping for ' + random_x + ' ms');
      sleep(random_x);
    }
    battleaxe();
  }
}

// function that performs wait for a thread/process/program
function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}

// function that eats rockcake
function biteCake(){
  sleep(642);
  robot.moveMouseSmooth(583, 294);
  robot.mouseClick('right');
  sleep(642);
  robot.moveMouseSmooth(583, 338);
  robot.mouseClick();
}

(function eden(){
    
      var sipCounter =4;
      while(sipCounter>0){
      // a total of 24 pots in 1 inventory
      var PotCounter=24;
        //
      // declared inside first while loop, hence each x/y combined cordinates can be used 16 times which is 16 sips
      var attackpotx= [668,668,711,711];
      var attackpoty= [259,259,297,297];
      var x= [582,625,668,707,582,625,668,707,582,625,668,707,582,625,668,707,582,625,668,707,582,625,668,707];
      var y= [335,373,406,439,477,292,335,373,406,439,477,292,335,373,406,439,477,292,335,373,406,439,477,292];
        while(PotCounter>0){
            var xTemp=getRandomInt(1,24);
            if(( x[xTemp]>2)&& (y[xTemp]>2) ){
              // literally 1 sip fo potion every 4 minute okay?
              
            robot.moveMouseSmooth(x[xTemp],y[xTemp]);
            
            robot.mouseClick();
            sleep(getRandomInt(50000,57000));
            randomeithzer();
            sleep(getRandomInt(50000,57000));
            randomeithzer();
            sleep(getRandomInt(50000,57000));
            randomeithzer();
            sleep(getRandomInt(50000,57000));
            randomeithzer();
              
            x[xTemp]=1;
            y[xTemp]=1;
             
            PotCounter--; // decrements counter for a total of 24 times
            if(PotCounter%=3){{
            var randomAttackpot=getRandomInt(1,4);
            if(( attackpotx[randomAttackpot]>2)& (attackpoty[randomAttackpot]>0) ) 
            {
            robot.moveMouseSmooth(attackpotx[randomAttackpot],attackpoty[randomAttackpot])
            robot.mouseClick();
            attackpotx[randomAttackpot]=0;
            attackpoty[randomAttackpot]=0;
            }
                            }
                          }
                                              }
                          }
            sipCounter--; // decrements a counter for a total of 4 times
            }
})();          

// randomlly choose to either battleaxe or toggle to reset hp
function randomeithzer(){
  var temp2 = getRandomInt(0,20);
  if(temp2%7){
    prayerToggle();
    sleep(2000);
    biteCake();
  }
  else if (temp2%=3){
    prayerToggle();
  }
  else{
    biteCake();
  }

}






// function that performs strength boost
function battleaxe() {
  robot.moveMouseSmooth(623, 254);
  robot.mouseClick();
  sleep(923);
  robot.moveMouseSmooth(589, 175);
  robot.mouseClick();
  sleep(523);
  robot.moveMouseSmooth(623, 254);
  robot.mouseClick();
  console.log('using my battleaxe spec ');
}
// function that resets health restore
function prayerToggle() {
  robot.moveMouseSmooth(557, 121);
  robot.mouseClick();
  sleep(131);
  robot.mouseClick();
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

//main();
