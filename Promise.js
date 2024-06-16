// example1
let a = 20;
let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(30);
    }, 2000)
})
promise1.then((data) => {
    let b = data;
    c = a + b;
    console.log("The sum is " + c);
})

// example2
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise p1 resolved");
        resolve(true);
    }, 3000)
})

p1.then((value) => {
    console.log("Value of promise p1 is ", value);
})

// example3
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("promise p2 get an Error"));
    }, 5000)
})

p2.catch((error) => {
    console.log("Some error occured in p2"); //Catch the error in promise
})

//Promise chaining
let p3 = new Promise((resolve, reject) =>
    setTimeout(() => {
        console.log("resolve p3 after 6 sec");
        resolve(true);
    }, 6000)
)
p3.then((value) => {
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("resolve p4 after 7 sec"))
        }, 7000)
    })
    return p4
}).then((value) => {
    console.log("we are done")
})