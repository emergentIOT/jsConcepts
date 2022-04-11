/**
 * JS performs Asyncronous programming as a feture, 
 */
/*
* Callback functions
    - Function executed after you provide a operation to perform.
*/
const fetchData = (userId, callback) => {
    setTimeout(function(){
        const fakeData = {
            id: userId,
            name: 'george'
        }
    callback(fakeData);
    }, 300);
};

const cb = data => {
    console.log("Your data", data)
}

fetchData(5, cb);

/*
    Promises represent completion of OBJ, either resolve(catch by .then) or reject(using .catch)
*/

function fetchData2(userId)  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId < 2) {
                reject("Fetch failed");
            }
            const fakeData = {
                id: userId,
                name: "George"
            };
            resolve(fakeData);
        }, 300);
    });
}

fetchData2(5)
.then(user => {
    console.log("here is data", user)
}).catch(err => {
    console.error(err)
});

Promise.allSettled([fetchData2(4), fetchData2(0.1)])
.then(user => {
    console.log("From promise.all():", user)
}).catch(err => {
    console.error("error:", err)
});

/*
    Async-await
        - DIfferent syntax for writing Promise
        - We can await the result of promise before executing subsecuent code
*/

const fetchUser3 = async userId => {
    try {
        const user = await Promise.allSettled([fetchData2(userId), fetchData2(userId)]);
        console.log("From async", user);
    } catch(err) {
        console.log("err", err);
    }
}

fetchUser3(1);

