var robot = require('robotjs');

function main() {
  console.log('Starting...');
  sleep(2000);
}

function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function tick(ms) {
  console.log(
    'sleeping for a random interval of ' + getRandomInt(ms, ms + 3000) + ' ms'
  );
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function login(){



robot.moveMouseSmooth(getRandomInt(407,520),getRandomInt(305,326));
robot.mouseClick();
sleep(1000);
// type username
robot.typeString(' ');
sleep(1000);
robot.keyTap("tab");
// type password 
robot.typeString('');
//  
robot.keyTap("enter");
sleep(7000);
// close the menu that pops up 
robot.moveMouseSmooth(getRandomInt(298,469),getRandomInt(335,382));
robot.mouseClick();


// start exchange function
}


function // clicks and initializes exchanging items
exchange(){
robot.moveMouseSmooth(getRandomInt(190,443),getRandomInt(200,213));
robot.mouseClick();

sleep(1000);

robot.moveMouseSmooth(getRandomInt(45,71),getRandomInt(163,175));
sleep(1000);

robot.typeString('grimy harralander');

}




// https://github.com/yida-li/Gaming-Bots
// cnnds
//
// the only thing stopping me was my own ego, super ego and the voices of others that are drowning my own inner desires 
//
//
//

login();
//
