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
 /* sleep(642);
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
  robot.mouseClick();*/
  robot.moveMouseSmooth(583+775, 331);
  robot.mouseClick('right'); // 44 is 2nd opetion right click
  robot.moveMouseSmooth(583, 375);
  robot.mouseClick();

}


function // instantly click all grimmy herbs with 2 svcs
CleaningVesispianGase2(){
    var yida=0;
for(var i=0;i<1300;i++){
//take herb at 4th location
robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
robot.mouseClick();
//close bank

robot.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
robot.mouseClick();


//take herb at 4th location
robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129)+534);
robot.mouseClick();
//close bank

robot.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53)+534);
robot.mouseClick();






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
var X_herbArray2=[getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),
  getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),  getRandomInt(616,630), 
   getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) , 
   getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716)]
var Y_herbArray2=[ getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534]



        
//a2
var counter =0;
         while (counter<27){

                var destiny = getRandomInt(0,27);
                if(X_herbArray[destiny]!=0 &&Y_herbArray[destiny]!=0){
                    // time complexity applied, just coen 352, from data structures, from algorithm
                    robot.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                    robot.mouseClick();
                    robot.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]+534);
                    robot.mouseClick();
                    X_herbArray[destiny]=0;
                    Y_herbArray[destiny]=0;
                    
                    counter++;
                }



         }
         sleep(getRandomInt(2000,3200));
         //banker

         if(clickBank1()==false){
          clickRoute1();
          sleep(4000);
          clickBank1();
        }   


sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342))
robot.mouseClick();

if(clickBank2()==false){
  clickRoute2();
  sleep(4000);
  clickBank2();
}  

sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342)+534)
robot.mouseClick();


yida++;
console.log(yida+' cycle sucessful');
}
   


}

// function of sheer complexity 
  function farmingCourse(){
    
    for( var i =0 ;i<4;i++){
        count=0;
        
        var y_position =[ 373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477,259,297,335,373,406,439,477];
        var x_position =[ 582,582,582,582,625,625,625,625,625,625,625,668,668,668,668,668,668,668,707,707,707,707,707,707,707];
  
          while (count <25){
  
        var temp= getRandomInt(0,24);
  
           if(x_position[temp]!=0, y_position[temp]!=0){
   robot.moveMouseSmooth(getRandomInt(800,1300),getRandomInt(69,800)); //200 iq
  clickatPosition(x_position[temp]+774,y_position[temp]);
  GatherResources2();
  GatherResources2();
  GatherResources2();
 guzzleLikeMad3(); 
 GatherResources2();
 GatherResources2();
 GatherResources2();
 guzzleLikeMad3(); 
 GatherResources2();
 GatherResources2();
 GatherResources2();
 guzzleLikeMad3(); 
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




function clickRoute1() {
  var flag=false;
  // Default colour for object marker at bank counter is FFFF00
  var img = robot.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['1b1b7f'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);
      
      robot.moveMouseSmooth(random_x, random_y);
      robot.mouseClick();
      flag=true;
      return flag; 
    }
  }
  return flag;
}

function clickBank1() {
  // Default colour for object marker at bank counter is FFFF00
  var flag=false;
  var img = robot.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['5c523f','9d9625','5c513e','1b1b7f'];
  for (var i = 0; i < 1011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);
      
      robot.moveMouseSmooth(random_x, random_y);
      robot.mouseClick();
      flag=true;
      return flag; 
    }
  }
  return flag;
}
function clickRoute2() {
  // Default colour for object marker at bank counter is FFFF00
  var img = robot.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['1a1a7e','0000cd','5c513e'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 519);
    var random_y = getRandomInt(0, 365);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);
      
      robot.moveMouseSmooth(random_x, random_y);
      robot.mouseClick();
      flag=true;
      return flag; 
    }
  }
  return flag;
}
function clickBank2() {
  flag=false;
  // Default colour for object marker at bank counter is FFFF00
  var img = robot.screen.capture(0, 0, 1900, 1080);
  var targetNpc = ['5c523f','5c513e','7e7c10'];
  for (var i = 0; i < 10011; i++) {
    var random_x = getRandomInt(0, 579);
    var random_y = getRandomInt(500, 897);
    var sample_color = img.colorAt(random_x, random_y);

    if (targetNpc.includes(sample_color)) {
      console.log('found action at : ' + random_x + ' ' + random_y);
      
      robot.moveMouseSmooth(random_x, random_y);
      robot.mouseClick();
      flag=true;
      return flag;
      
    }
  }
  return flag;
}



function guzzleLikeMad1(){
  for(var i=0;i<getRandomInt(10,20);i++){
    robot.moveMouseSmooth(getRandomInt(581,585), getRandomInt(329,334));
  
    robot.mouseClick('right'); // 44 is 2nd opetion right click
     sleep(getRandomInt(50,130));
    robot.moveMouseSmooth(583, 375);
    robot.mouseClick();
  }
  }
  function guzzleLikeMad3(){
    for(var i=0;i<getRandomInt(1,4);i++){
      robot.moveMouseSmooth(getRandomInt(581,585)+774, getRandomInt(329,334));
    
      robot.mouseClick('right'); // 44 is 2nd opetion right click
       sleep(getRandomInt(50,130));
      robot.moveMouseSmooth(583+774, 375);
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
function // slowly combining the clean herb with vial of water in a designated location with 2 svcs
GatherResources2(){
  
  // change 3000 to any amount of time 
 
  var X_herbArray=[getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),
      getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),  getRandomInt(616,630), 
       getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) , 
       getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716)]
  var Y_herbArray=[ getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
  ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
  ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
  ,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
  ,getRandomInt(431,444),getRandomInt(463,479)]
  var X_herbArray2=[getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),getRandomInt(576,586),
    getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),   getRandomInt(616,630),  getRandomInt(616,630),  getRandomInt(616,630), 
     getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) ,  getRandomInt(656,670) , 
     getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716),getRandomInt(699,716)]
var Y_herbArray2=[ getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534,getRandomInt(247,258)+534,getRandomInt(283,296)+534,getRandomInt(321,332)+534,getRandomInt(358,371)+534,getRandomInt(389,406)+534
,getRandomInt(431,444)+534,getRandomInt(463,479)+534]

  

              //  a1
      robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
      robot.mouseClick('right');
      tick(getRandomInt(700,800));
      robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(213,214));
      robot.mouseClick(); tick(getRandomInt(700,800));
  robot.moveMouseSmooth(getRandomInt(282,289),getRandomInt(120,129));
  robot.mouseClick(); tick(getRandomInt(700,800));
  
 // a1
      robot.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
      robot.mouseClick();
      tick();
      robot.moveMouseSmooth(getRandomInt(576,586),getRandomInt(358,371));
      robot.mouseClick();
      robot.moveMouseSmooth(getRandomInt(576,586),getRandomInt(389,406));
      robot.mouseClick();
      tick(622);
      robot.moveMouseSmooth(getRandomInt(227,290),getRandomInt(433,480));
      robot.mouseClick();


              // b1
              robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129)+534);
              robot.mouseClick('right');
              tick(getRandomInt(700,800));
              robot.moveMouseSmooth(getRandomInt(227,243),getRandomInt(213,214)+534);
              robot.mouseClick(); tick(getRandomInt(700,800));
      robot.moveMouseSmooth(getRandomInt(282,289),getRandomInt(120,129)+534);
      robot.mouseClick();

     
 
  //b1
  robot.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53)+534);
  robot.mouseClick();
  tick();robot.moveMouseSmooth(getRandomInt(576,586),getRandomInt(358,371)+534);
  robot.mouseClick();
  robot.moveMouseSmooth(getRandomInt(576,586),getRandomInt(389,406)+534);
  robot.mouseClick();
  tick(622); robot.moveMouseSmooth(getRandomInt(227,290),getRandomInt(433,480)+534);
  robot.mouseClick();




 
  sleep(getRandomInt(2000,3200));
         //banker

         if(clickBank1()==false){
          clickRoute1();
          sleep(4000);
          clickBank1();
        }   


sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342))
robot.mouseClick();

if(clickBank2()==false){
  clickRoute2();
  sleep(4000);
  clickBank2();
}  

sleep(getRandomInt(1200,2000));
//bankcccc
robot.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342)+534)
robot.mouseClick();
  
  
  
  
  
  
  
   
  }



  //https://github.com/yida-li/Gaming-Bots

//duoCourse();
//guzzleLikeMad2();guzzleLikeMad2();guzzleLikeMad2 ();
//guzzleLikeMad1();guzzleLikeMad1();guzzleLikeMad1();
//duoCourse();
farmingCourse();
//CleaningVesispianGase2();
//guzzleLikeMad3();guzzleLikeMad3();guzzleLikeMad3();
//GatherResources2();