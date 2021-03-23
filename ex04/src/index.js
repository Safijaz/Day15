const milili = [10,25,4]; //do not change this line

function myArr(mili){
    "use strict";
    // Only change code below line
    // Using mili =[4,10,25] would be invalid
  
      mili[0] = 4;
      mili[1] = 10;
      mili[2]= 25;
     
    return mili;
    } 
    
    console.log(myArr(milili));
    module.exports =myArr;

