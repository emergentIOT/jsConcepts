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
 * 
 * n = first undefined then in second run it will be 2
 * //function is stored as it is
 * add(num) {
    var ans = num * num;
    return ans;
    } //For function execution it will create aother execution context, same as explained.
    addition = undefined;
    addition_1 = undefined;

    Phase 1 is completed and phaze 2 will start i.e. code execution line by line.

    NOTE: Once code execution is done, the EXECUTION CONTEXT get DELETED, same for nested functions()
 */
var n = 2;
// num is parameter.
function add(num) {
    var ans = num * num;
    //return statement will take you to the place, where execution context was. i.e line 36
    return ans;
}

// n is argument
var addition = add(n);
var addition_1 = add(4);


/**
 * Concept of CALL STACK, WHICH MANAGES THE ORDER OF EXECUTION OF EXECUTION CONTEXT
 */
