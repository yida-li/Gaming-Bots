//importing the robotjs
var robot = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {console.log('sleeping for ' + ms + ' ms');
Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

}
  
  
function clickatPosition(x,y){

robot.moveMouseSmooth(x,y);
robot.mouseClick();
tick();

}

function biteCake(){
  sleep(642);
  robot.moveMouseSmooth(583, 331);
  robot.mouseClick('right'); // 44 is 2nd opetion right click
  robot.moveMouseSmooth(583, 375);
  robot.mouseClick();
  sleep(602);
  robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,169)); //200 iq
  robot.moveMouseSmooth(583, 331+534);
  robot.mouseClick('right');
  sleep(642);
  robot.moveMouseSmooth(583, 375+534);
  robot.mouseClick();
}

// function of sheer complexity 
  function duoCourse(){
    
    for( var i =0 ;i<4;i++){
        count=0;
        
        var y_position =[ 373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477];
        var x_position =[ 582,582,582,582,625,625,625,625,625,625,625,668,668,668,668,668,668,668,707,707,707,707,707,707,707];
  
          while (count <25){
  
        var temp= getRandomInt(0,24);
  
           if(x_position[temp]!=0, y_position[temp]!=0){
   robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
  clickatPosition(x_position[temp],y_position[temp]);
  sleep(getRandomInt(20000,25000));  
  biteCake();
   robot.moveMouseSmooth(getRandomInt(55,1800),getRandomInt(69,800)); //200 iq
  clickatPosition(x_position[temp],y_position[temp+534]);
  sleep(getRandomInt(20000,25000));  
  
  biteCake();
   robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
   sleep(getRandomInt(20000,25000)); // sleep(getRandomInt(45000,50000));
  biteCake();
   robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
   sleep(getRandomInt(20000,25000)); 
   // sleep(getRandomInt(40000,42699)); //sleep(getRandomInt(45000,50000));
  battleaxe();
  biteCake();
   robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
   sleep(getRandomInt(20000,25000));  
  biteCake();
  sleep(getRandomInt(20000,25000));  
  y_position[temp]=0;
  x_position[temp]=0;
  count++;
  
           }
  
            }
  
    }
    
  
  
  
          
  
  
  
        }

// function of sheer complexity but for 3
function duoCourse3(){
    
  for( var i =0 ;i<4;i++){
      count=0;
      
      var y_position =[ 373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477];
      var x_position =[ 582,582,582,582,625,625,625,625,625,625,625,668,668,668,668,668,668,668,707,707,707,707,707,707,707];

        while (count <25){

      var temp= getRandomInt(0,24);

         if(x_position[temp]!=0, y_position[temp]!=0){
 robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
clickatPosition(x_position[temp],y_position[temp]);
GatherResources();   
biteCake();
 robot.moveMouseSmooth(getRandomInt(55,1800),getRandomInt(69,800)); //200 iq
clickatPosition(x_position[temp],y_position[temp+534]);
GatherResources();
biteCake();
 robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
GatherResources();
GatherResources();
GatherResources();
biteCake();
 robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
 GatherResources();
 GatherResources();
 GatherResources();
battleaxe();
biteCake();
 robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
 GatherResources();
biteCake();
GatherResources();
y_position[temp]=0;
x_position[temp]=0;
count++;

         }

          }

  }
  



        



      }
// randomlly choose to either battleaxe or toggle to reset hp
function randomeithzer(){
  var temp2 = getRandomInt(1,2);
  
if (temp2=1){
    prayerToggle();
  }
  else{
    biteCake();
  }

}

function //  slowly combining the clean herb with vial of water in a designated location
GatherResources(){

var X_herbArray=[getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,
    getRandomInt(616,630)+775,  getRandomInt(616,630)+775,   getRandomInt(616,630)+775,  getRandomInt(616,630)+775,   getRandomInt(616,630)+775,  getRandomInt(616,630)+775,  getRandomInt(616,630)+775, 
     getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 , 
     getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775]
var Y_herbArray=[ getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479)]
  robot.moveMouseSmooth(getRandomInt(227,243)+774,getRandomInt(120,129));
robot.mouseClick('right');
tick(getRandomInt(700,800));
robot.moveMouseSmooth(getRandomInt(227,243)+774,getRandomInt(213,214));
robot.mouseClick();
//close bank
tick(getRandomInt(700,800));
robot.moveMouseSmooth(getRandomInt(282,289)+774,getRandomInt(120,129));
robot.mouseClick();
//close bank

robot.moveMouseSmooth(getRandomInt(484,494)+774,getRandomInt(43,53));
robot.mouseClick();
tick();

//combine 2 elements
robot.moveMouseSmooth(getRandomInt(576,586)+774,getRandomInt(358,371));
robot.mouseClick();
robot.moveMouseSmooth(getRandomInt(576,586)+774,getRandomInt(389,406));
robot.mouseClick();
tick(622);
// clicking make all
robot.moveMouseSmooth(getRandomInt(227,290)+774,getRandomInt(433,480));
robot.mouseClick();

sleep(9000);
robot.moveMouseSmooth(264+774,172);
robot.mouseClick();


sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454)+774,getRandomInt(327,342))
robot.mouseClick();








 
}function guzzleLikeMad1(){
  for(var i=0;i<getRandomInt(10,20);i++){
    robot.moveMouseSmooth(getRandomInt(581,585), getRandomInt(329,334));
  
    robot.mouseClick('right'); // 44 is 2nd opetion right click
     sleep(getRandomInt(50,130));
    robot.moveMouseSmooth(583, 375);
    robot.mouseClick();
  }
  }
  
  function guzzleLikeMad2(){
  for(var i=0;i<getRandomInt(30,40);i++){
    robot.moveMouseSmooth(getRandomInt(581,585), getRandomInt(862,867));
    robot.mouseClick('right');
    sleep(getRandomInt(50,130));
    robot.moveMouseSmooth(583, 375+534);
    robot.mouseClick();
  }
  }
// function that performs strength boost
function battleaxe() {
  robot.moveMouseSmooth(582, 293);
  robot.mouseClick();
  sleep(923);
  robot.moveMouseSmooth(559, 175);
  robot.mouseClick();
  sleep(523);
  robot.moveMouseSmooth(582, 293);
  robot.mouseClick();
  console.log('using my battleaxe spec ');
}
// function that resets health restore
function prayerToggle() {
  robot.moveMouseSmooth(557, 121);
  robot.mouseClick();
  sleep(231);
  robot.mouseClick();
  robot.moveMouseSmooth(557, 121+534);
  robot.mouseClick();
  sleep(231);
  robot.mouseClick();
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



//duoCourse3();guzzleLikeMad1();
//
//guzzleLikeMad2();guzzleLikeMad2();
//guzzleLikeMad2();
duoCourse3();