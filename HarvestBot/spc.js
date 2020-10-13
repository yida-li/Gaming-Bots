//T-280 space construction vehicle is a type of terran general-purpose engineering vehicle.
// the only dependencies needed for this segment of my consciousnesss
var spc = require('robotjs');

// function that performs wait for a thread/process/program
function sleep(ms) {
  console.log('sleeping for ' + ms + ' ms');
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  // console.log('sleeping for ' + ms + ' ms');
}


function //  slowly combining the clean herb with vial of water in a designated location
GatherResources(){
while(true){
var X_herbArray=[getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,getRandomInt(576,586)+775,
    getRandomInt(616,630)+775,  getRandomInt(616,630)+775,   getRandomInt(616,630)+775,  getRandomInt(616,630)+775,   getRandomInt(616,630)+775,  getRandomInt(616,630)+775,  getRandomInt(616,630)+775, 
     getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 ,  getRandomInt(656,670)+775 , 
     getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775,getRandomInt(699,716)+775]
var Y_herbArray=[ getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479),getRandomInt(247,258),getRandomInt(283,296),getRandomInt(321,332),getRandomInt(358,371),getRandomInt(389,406)
,getRandomInt(431,444),getRandomInt(463,479)]
  spc.moveMouseSmooth(getRandomInt(227,243)+774,getRandomInt(120,129));
spc.mouseClick('right');
tick(getRandomInt(700,800));
spc.moveMouseSmooth(getRandomInt(227,243)+774,getRandomInt(213,214));
spc.mouseClick();
//close bank
tick(getRandomInt(700,800));
spc.moveMouseSmooth(getRandomInt(282,289)+774,getRandomInt(120,129));
spc.mouseClick();
//close bank

spc.moveMouseSmooth(getRandomInt(484,494)+774,getRandomInt(43,53));
spc.mouseClick();
tick();

//combine 2 elements
spc.moveMouseSmooth(getRandomInt(576,586)+774,getRandomInt(358,371));
spc.mouseClick();
spc.moveMouseSmooth(getRandomInt(576,586)+774,getRandomInt(389,406));
spc.mouseClick();
tick(622);
// clicking make all
spc.moveMouseSmooth(getRandomInt(227,290)+774,getRandomInt(433,480));
spc.mouseClick();

sleep(9000);
spc.moveMouseSmooth(264+774,172);
spc.mouseClick();


sleep(getRandomInt(1200,2000));
//bankcccc
spc.moveMouseSmooth(getRandomInt(432,454)+774,getRandomInt(327,342))
spc.mouseClick();






}

 
}
function // slowly combining the clean herb with vial of water in a designated location with 2 svcs
GatherResources2(){
  var time=0;
  // change 3000 to any amount of time 
  while(time<3000){
    time++;
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
      spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
      spc.mouseClick('right');
      tick(getRandomInt(700,800));
      spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(213,214));
      spc.mouseClick(); tick(getRandomInt(700,800));
  spc.moveMouseSmooth(getRandomInt(282,289),getRandomInt(120,129));
  spc.mouseClick(); tick(getRandomInt(700,800));
  
 // a1
      spc.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
      spc.mouseClick();
      tick();
      spc.moveMouseSmooth(getRandomInt(576,586),getRandomInt(358,371));
      spc.mouseClick();
      spc.moveMouseSmooth(getRandomInt(576,586),getRandomInt(389,406));
      spc.mouseClick();
      tick(622);
      spc.moveMouseSmooth(getRandomInt(227,290),getRandomInt(433,480));
      spc.mouseClick();


              // b1
              spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129)+534);
              spc.mouseClick('right');
              tick(getRandomInt(700,800));
              spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(213,214)+534);
              spc.mouseClick(); tick(getRandomInt(700,800));
      spc.moveMouseSmooth(getRandomInt(282,289),getRandomInt(120,129)+534);
      spc.mouseClick();

     
 
  //b1
  spc.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53)+534);
  spc.mouseClick();
  tick();spc.moveMouseSmooth(getRandomInt(576,586),getRandomInt(358,371)+534);
  spc.mouseClick();
  spc.moveMouseSmooth(getRandomInt(576,586),getRandomInt(389,406)+534);
  spc.mouseClick();
  tick(622); spc.moveMouseSmooth(getRandomInt(227,290),getRandomInt(433,480)+534);
  spc.mouseClick();




  sleep(5000);
  //a1
   spc.moveMouseSmooth(264,172);
  spc.mouseClick();
  tick(getRandomInt(634,780));
 spc.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342));
  spc.mouseClick();


  

sleep(getRandomInt(1200,2000));

  spc.moveMouseSmooth(264,172+534);
  spc.mouseClick();
  tick(getRandomInt(634,780));
  //bankcccc
  spc.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342)+534);
  spc.mouseClick();
  
  
  
  
  
  
  }
  
   
  }

  function // instantly click all grimmy herbs 
CleaningVesispianGase1(){
      var yida=0;
  for(var i=0;i<40000;i++){
  //take herb at 4th location
  spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
  spc.mouseClick();
  //close bank
  
  spc.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
  spc.mouseClick();
  
  
  
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
                      spc.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                      spc.mouseClick();
                      X_herbArray[destiny]=0;
                      Y_herbArray[destiny]=0;
                      
                      counter++;
                  }
  
  
  
           }
           sleep(getRandomInt(2000,2500));
  
           //banker
  spc.moveMouseSmooth(264,172);
  spc.mouseClick();
  
  
  sleep(getRandomInt(1200,2000));
  //bankcccc
  spc.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342))
  spc.mouseClick();
   
  
  
  yida++;
  console.log(yida+' cycle sucessful');
  }
     
  
  
} 
  

function // instantly click all grimmy herbs with 2 svcs
CleaningVesispianGase2(){
    var yida=0;
for(var i=0;i<40000;i++){
//take herb at 4th location
spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129));
spc.mouseClick();
//close bank

spc.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53));
spc.mouseClick();


//take herb at 4th location
spc.moveMouseSmooth(getRandomInt(227,243),getRandomInt(120,129)+534);
spc.mouseClick();
//close bank

spc.moveMouseSmooth(getRandomInt(484,494),getRandomInt(43,53)+534);
spc.mouseClick();






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
                    spc.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                    spc.mouseClick();
                    spc.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]+534);
                    spc.mouseClick();
                    X_herbArray[destiny]=0;
                    Y_herbArray[destiny]=0;
                    
                    counter++;
                }



         }
         sleep(getRandomInt(2000,3200));
         //banker
spc.moveMouseSmooth(264,172);
spc.mouseClick();


sleep(getRandomInt(1200,2000));
//bankcccc
spc.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342))
spc.mouseClick();

spc.moveMouseSmooth(264,172+534);
spc.mouseClick();


sleep(getRandomInt(1200,2000));
//bankcccc
spc.moveMouseSmooth(getRandomInt(432,454),getRandomInt(327,342)+534)
spc.mouseClick();


yida++;
console.log(yida+' cycle sucessful');
}
   


}

function //  quickly combining the unfinished potion with the specific ingrediant
CreatingSupplyCenter(){

}


function //  quickly turn all grimy herbs into clean
ShowMeTheMoney(){
    
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
                    spc.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]);
                    spc.mouseClick('right');
                    
                    spc.moveMouse(X_herbArray[destiny],Y_herbArray[destiny]+40);
                    spc.mouseClick();
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

//testing ------ 
//main();
//swip();
//GatherResources2();
//CleaningVesispianGase2();
//ShowMeTheMoney();
GatherResources();