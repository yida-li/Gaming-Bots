
var robot = require('robotjs');



// function that performs wait for a thread/process/program
function sleep(ms) {
    console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}
/*
(function eden(){
    var yida=0;
for(var i=0;i<40;i++){
//take herb at 4th location
robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
robot.mouseClick();
//close bank

robot.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
robot.mouseClick();


sleep(getRandomInt(600,1200));
sleep(getRandomInt(600,1200));


console.log('swiping digital farms');
var X_herbArray=[getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),
        getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),  getRandomInt(616,630), 
         getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) , 
         getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716)]
var Y_herbArray=[ getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479)]
    

var counter =0;
         while (counter<27){

                var destiny = getRandomInt(0,27);
                if(X_herbArray[destiny]!=0 &&Y_herbArray[destiny]!=0){
                    // time complexity applied, just coen 352, from data structures, from algorithm
                    robot.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                    robot.mouseClick();
                    X_herbArray[destiny]=0;
                    Y_herbArray[destiny]=0;
                    
                    counter++;
                }



         }
         sleep(getRandomInt(4000,5000));

         //banker
robot.moveMouseSmooth(264,172);
robot.mouseClick();


sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342))
robot.mouseClick();
sleep(getRandomInt(600,1200));
sleep(getRandomInt(600,1200));
sleep(getRandomInt(600,1200));
yida++;
console.log(yida+' cycle sucessful');
}
   


}

)()  

*/
function swip(){
    console.log('swiping digital farms');
var X_herbArray=[getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),
        getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),  getRandomInt(616,630), 
         getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) , 
         getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716)]
var Y_herbArray=[ getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
    ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479)]
    

var counter =0;
         while (counter<27){

                var destiny = getRandomInt(0,27);
                if(X_herbArray[destiny]!=0 &&Y_herbArray[destiny]!=0){
                    // time complexity applied, just coen 352, from data structures, from algorithm
                    robot.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                    robot.mouseClick();
                    X_herbArray[destiny]=0;
                    Y_herbArray[destiny]=0;
                    
                    counter++;
                }



         }
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
swip();