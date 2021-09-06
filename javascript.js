/**
 * JS is a Synchronous Single Threaded language.
 * Everything happend in JAVSCRIPT is inside EXECUTION CONTEXT.
 * 
 * Where EC, is divided into two parts.
 * 
 *  1.Memory(Environment Variable) ---> PHAZE 1
 *      - Where we save, key:value;
 *                       a = 10;
 *                       functions() {}
 *  2.Code (Thread of Execution) ---> PHAZE 2
 *      - Code is executed line by line.
 */


/**
 * PHAZE 1 
 * n = undefined 
 * //Number is stored as it is
 * number(num) {
    var ans = num * num;
    return ans;
    } //For function execution it will create aother execution context, same as explained.
    square = undefined;
    square1 = undefined;

    Phase 1 is completed and phaze 2 will start i.e. code execution line by line.
 */
var n = 2;
function add(num) {
    var ans = num * num;
    return ans;
}

var addition = add(n);
var addition_1 = add(4);



