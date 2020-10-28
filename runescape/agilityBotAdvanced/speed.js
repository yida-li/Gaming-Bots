// yida
var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
}

function sleep(ms) {console.log('sleeping for '+ms+' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  
}

function tick(ms) {
  
  console.log('sleeping for a random interval of '+getRandomInt(ms, ms+3000)+' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// the first building to climb

  function findTarget() {
    var img = robot.screen.capture(0, 0, 520, 366);
    var targetNpc = ['6e719e','6e6e98','5e5d89','686892','424243'];
    for (var i = 0; i < 10011; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);
  
      if (targetNpc.includes(sample_color)) {
        console.log('running back to starting roof : ' + random_x + ' ' + random_y);
        
        robot.moveMouseSmooth(random_x, random_y);
        robot.mouseClick('left');
        tick(8620);
        return true;
      }
    }
    return false;
  }

  
  
    function findTarget2() {
      //findToken();
      var img = robot.screen.capture(0, 0, 520, 366);
      var targetNpc = ['110e40','282557','232254','151345','5a5a86','30284d','4e4c7a','474674', '6d719e', '20209c','302f7f','44444be','686892', '6d719e', '20209c','302f7f','44444be','5e5d89'];
      for (var i = 0; i < 10011; i++) {
        var random_x = getRandomInt(132, 132+339);
        var random_y = getRandomInt(115, 115+190);
        var sample_color = img.colorAt(random_x, random_y);
    
        if (targetNpc.includes(sample_color)) {
          console.log('found action at : ' + random_x + ' ' + random_y);
          
          robot.moveMouseSmooth(random_x, random_y);
          robot.mouseClick();
          tick(6330);
          return { random_x, random_y };
        }
      }
      return false;
    }

    // Still need to work on it because of spread yellow pixels
  function findToken() {
      var img = robot.screen.capture(0, 0, 520, 366);
      var targetNpc = ['b49e15','bda518'];
      for (var i = 0; i < 10011; i++) {
        var random_x = getRandomInt(159, 340);
        var random_y = getRandomInt(168, 318);
        var sample_color = img.colorAt(random_x, random_y);
    
        if (targetNpc.includes(sample_color)) {
          console.log('token found at : ' + random_x + ' ' + random_y);
          
          robot.moveMouseSmooth(random_x, random_y);
          robot.mouseClick();
          tick(4000);
          return  true ;
        }
      }
      return false;
    }
// repositions character to the starting point for hard resets
function reposition() {
  console.log('going back to default position');
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['f03e3e', 'c13232', 'c73535', 'a03432', 'cc3938', 'bf3632', ''];
  
  
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        tick(12000);
        return true;  
      }
      }
    
    return false;
  }

  function RandomWorldJumper(){
    //randomly jump to a world
    robot.moveMouse(663, getRandomInt(278,452));
    sleep(642);
    robot.mouseClick();
    console.log('sneaking into to a random world')
    tick(10000);
  }
  function errorFinding() {
  console.log('gfinding errors');
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['6e719e','6e6e98','5e5d89','686892','424243'];
  
  
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
       
        console.log('found'+sample_color);
        return true;  
      }
      }
    
    return false;
  }
  function checkLevel(){
    robot.moveMouseSmooth(getRandomInt(573,583), getRandomInt(204,219));
    sleep(642);
    robot.mouseClick();
    robot.moveMouseSmooth(getRandomInt(627,662), getRandomInt(273,287));
    tick(1000);
    robot.moveMouseSmooth(getRandomInt(638,650), getRandomInt(506,513));
    robot.mouseClick();
    tick(3000);
  }
function FullCourse(){
while(true)
{
  for(var j=0;j<getRandomInt(2,4);j++){
    for( var i =0 ;i<getRandomInt(69,369);i++)
  {

    if (findTarget2()==false)
      {
      if (findTarget2()==false)
          {
        if (findTarget2()==false)
            {
          if(reposition()==true)  
              {
                if(findTarget()==false){
                  if(findTarget2()==false){

                  }
                }
              }
            }
          }
      }
  }RandomWorldJumper(); }checkLevel();
     
  
}//ending while loop              
}//ending function
FullCourse();
