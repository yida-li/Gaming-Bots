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
exchange(x){
robot.moveMouseSmooth(getRandomInt(190,443),getRandomInt(200,213));
robot.mouseClick();

sleep(3000);

robot.moveMouseSmooth(getRandomInt(45,71),getRandomInt(163,175));
robot.mouseClick();
sleep(3000);

robot.typeString(x);
sleep(1000);
robot.keyTap("enter");

sleep(3000);

// custom amount
robot.moveMouseSmooth(getRandomInt(225,244),getRandomInt(234,247));
robot.mouseClick();
sleep(3000);

// 100 amount
robot.typeString('100');
sleep(1000);
robot.keyTap('enter');
sleep(3000);

//5 percent less
robot.moveMouseSmooth(getRandomInt(284,302),getRandomInt(234,247))
robot.mouseClick();
sleep(1000);
//confirm
robot.moveMouseSmooth(getRandomInt(201,322),getRandomInt(304,324));
robot.mouseClick();
}




// https://github.com/yida-li/Gaming-Bots
// cnnds
//
// the only thing stopping me was my own ego, super ego and the voices of others that are drowning my own inner desires 
//
//
//  login();

exchange('grimy harralander');
//
