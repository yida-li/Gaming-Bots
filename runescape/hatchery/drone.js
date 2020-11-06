

// yida
const { get } = require('http');
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
robot.typeString();
sleep(1000);
robot.keyTap("tab");
// type password 
robot.typeString('');
//  
robot.keyTap("enter");
sleep(7000);
robot.moveMouseSmooth(getRandomInt(298,469),getRandomInt(335,382));
robot.mouseClick();

}

function exchange(){
robot.moveMouseSmooth(getRandomInt(190,443),getRandomInt(200,213));

}
// https://github.com/yida-li/Gaming-Bots
// cnnds
// 

login();
//
