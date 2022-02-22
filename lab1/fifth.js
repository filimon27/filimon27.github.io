
/*
Input                             Ddefining Table processing                                     Output
-------------------------------------------------------------------------------------------------------
=>Cost of the house              Calculate the down payment according to the cost of the house      The down payment.  

*/
    





const prompt= require("prompt-sync")();
const K=1000;
let costofHouse=prompt("Please enter the coat of the house :")
let downPayment;
 if(costofHouse>0 && costofHouse<=50*K){
 downPayment=costofHouse*0.05;
 }
 else if( costofHouse>50*K && costofHouse<=100*K){
     downPayment= 1*K + 0.01*(costofHouse - 50*K)
 }
 else if( costofHouse>100*K && costofHouse<=200*K){
    downPayment= 2*K + 0.15*(costofHouse-100*K);
 }
 else{
 downPayment= 5*K + 0.01(costofHouse - 200*K)
}
 console.log("The down payment is  $ " + downPayment);

 