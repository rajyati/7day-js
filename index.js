//Write a function findMax that takes an array of numbers as input and return the maxium number in the array
const findMax =(arr) => {
    console.log(...arr);
    return Math.max(...arr)
}

//Example usege 
console.log(findMax([1,5,3,9,2]));
console.log(findMax([-10,-5,-3,-9,-2]));
console.log(findMax([5]));