  "use strict";
  /**
   * 
   * 
   * 
   */
  
  let sum=0;
  let product=1;
function sumDigits(value){
     while(value){
     let digit=value%10;
       sum+=digit
       value=(value-digit)/10;
    }
    return sum;
     
}
console.log(sumDigits(456));


function multDigits(value){
    
    while(value){
       let  digit=value%10;
          product*=digit
          value=(value-digit)/10;
       }
       return product;
}
console.log(multDigits(235))