/**
 *                  HIGHER ORDER FUNCTIONS
 * 
 * map, filter, reduce
 */

//Map is user to transform an array.
const arr = [2, 4, 6, 8, 10, 7];

const double = arr.map((x) =>  x*2 );
const binary = arr.map( x => x.toString(2));
console.log(binary);

//Filter data from an array

const isOdd = arr.filter(x => x%2 );

console.log(isOdd);

const getSum = arr.reduce((acc, arr) => {
    acc = acc + arr;
    return acc;
}, 0);

console.log("SUm", getSum);