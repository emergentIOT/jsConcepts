console.log("Welcome to array methods");
const items = [
    { name: 'Aman', price: 100},
    { name: 'deep', price: 10},
    { name: 'manu', price: 120},
    { name: 'jassi', price: 400},
    { name: 'harpal', price: 700},
    { name: 'jaspal', price: 350},
    { name: 'jassi', price: 8}
]

/**
 * Array.filter()
 */
const filterItems = items.filter((curElem) => {
    return curElem.price <= 100
})
console.log("Filter items", filterItems);

/**
 * Array.map()
 */
const getOnlyNames = items.map((curElem) => {
    return curElem.name
})
console.log("Get only names", getOnlyNames);

/**
 * Array.find()
 */
const findItem = items.find((curElem) => {
    return curElem.name === 'jadssi'
})
console.log("FInd item ", findItem);

/**
 * Array.forEach
 */
items.forEach((curElem) => {
    console.log(curElem.name);
})

/**
 * check if any item has price < 100 in given items array
 * as soon first item is matched it will return tru
*/
const findInexpensiveItem = items.some((item) => {
    return item.price > 178700
})
console.log("FInd inExpensive item", findInexpensiveItem);

/**
 * Array.reduce()
 */
const total = items.reduce((sum, item) => {
    return item.price + sum
}, 0);
console.log("Total using reduce method", total);
