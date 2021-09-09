
console.log("Hoisting in Javascript");
/**
 * 
 */

/**
 * 
 * EXAMPLE - 1
 * 
 * Debug the below code in browser, in source section.
 * 
 * First Time 
 * - it skims the whole code and alot the variables: undefined and 
 *   stores the whole function() as it is. 
 * - NOTE: NO matter what the order of initialization, it will always alot the variables and func() in execution context.
 * Second Time
 */

/**
 * //Var x = 7;
 *  - if we not define the variable x and try to executre it, the execution context will 
 *    not create memory for variable in first run , thus gives: reference error / reference x is not defined.
 * 
 * //console.log(x);
 * //var x = 7; 
 *  - The above statement will result in undefined.
 */
var x = 7;
function getName() {
    console.log("Hoisting testing");

}
console.log(x);
console.log(getName);

/**
 * EXAMPLE - 2
 * 
 * - If we use arrow functions , the execution context will treat as variable instead as pure function.
 */
console.log(getAnotherName);
var getAnotherName = () => {
    console.log(`This time i will be treated as variable, the above line will give UNDEFINED and below will print whole function`);
}
console.log(getAnotherName);