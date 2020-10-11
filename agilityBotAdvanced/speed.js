// yida



var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function tick() {
  sleep(602);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// obstacles clicking
function doAObstacle(ms) {
  console.log('Finding obstacle');
  
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['0000FF', '6d719e', '20209c','302f7f','44444be',''];
  var counter = true;
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }if (counter==false){
        break;
      }
    }
    if (counter==false){
      break;
    }
  }
  return counter;
}

// obstacles clicking
function doAObstacle2(ms) {
  console.log('Finding obstacle');
  
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['5a5a86',''];
  var counter = true;
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }if (counter==false){
        break;
      }
    }
    if (counter==false){
      break;
    }
  }
  return counter;
}

// obstacles clicking
function doAObstacle3(ms) {
  console.log('Finding obstacle');
  
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = [
    '5a5a86','30284d','4e4c7a','474674'];
  var counter = true;
  while (counter) {
    for (var i = 0; i < 100000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }if (counter==false){
        break;
      }
    }
    if (counter==false){
      break;
    }
  }
  return counter;
}




// obstacles clicking
function doAObstacle5(ms) {
  console.log('Finding obstacle');
  
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['110e40','282557','232254','151345',];
  var counter = true;
  while (counter) {
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }if (counter==false){
        break;
      }
    }
    if (counter==false){
      break;
    }
  }
  return counter;
}


// finding a blue tile > look for mark   
function findgrace(ms) {
  console.log('Tooking for tokens');
  var flag= true;
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['968311', 'b49e15', 'bda518','9f2211'];
  for (var i = 0; i < 10000; i++) {
      // eye-balling a  307x197 square so
      var random_x = getRandomInt(50, 424);
      var random_y = getRandomInt(124, 319);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        flag=false;
        }
      if (flag==false){
      break;
      }
          
        }
      return flag;
        
  }
  
    
  


// obstacles clicking
function doAObstacle4(ms) {
  console.log('Finding obstacle');
  
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['110e40','282557','232254','151345','5a5a86','30284d','4e4c7a','474674','0000FF', '6d719e', '20209c','302f7f','44444be'];
  var counter = true;
  
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }
      if (counter==false){
        break;
      }
    }
    
  
  return counter;
}



// repositions character to the starting point for hard resets
function reposition(ms) {
  console.log('going back to default position');
  var img = robot.screen.capture(0, 0, 520, 366);
  var targetNpc = ['f03e3e', 'c13232', 'c73535', 'a03432', 'cc3938', 'bf3632', ''];
  var counter = true;
  
    for (var i = 0; i < 10000; i++) {
      var random_x = getRandomInt(0, 500);
      var random_y = getRandomInt(0, 360);
      var sample_color = img.colorAt(random_x, random_y);

      if (targetNpc.includes(sample_color)) {
        console.log('found at : ' + random_x + ' ' + random_y);
        robot.moveMouse(random_x, random_y);
        robot.mouseClick('left');
        sleep(ms);
        counter = false;
        
      }if (counter==false){
        break;
      }
    }
    return counter;
  }
 


  function cou(){
reposition(8000);
if(doAObstacle(4000)==true)
sleep(3000);

if(doAObstacle(4000)==true)
sleep(3000);
if(doAObstacle(4000)==true)
sleep(3000);
if(doAObstacle(4000)==true)
sleep(3000);
if(doAObstacle(4000)==true)
sleep(3000);
if(doAObstacle(4000)==true)
sleep(3000);

  }
//reposition(5000);
cou();
//
//cou();


 // work for 2,3 ,4,5
//fullCourse();
//doAObstacle4(3000);
//doAObstacle3();
//doAObstacle3(2000);
//testing commands:
//
//console.log();
//findgrace(2000);
//