



  function addingArray(array){
    let sum =0;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        sum=array[i]+[j];
    }
    
}
return sum;
}

let matrix = [ 
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]];
let outPut= addingArray(matrix)
console.log("The sum is  " + outPut);