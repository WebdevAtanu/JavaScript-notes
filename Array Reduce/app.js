//=============== Array reduce====================
// Example1
var arr = [10, 20, 30, 40, 50];
var res = arr.reduce((acc, val, index) => {
    console.log(acc);
    acc = acc + val;
    return acc;

});
console.log(res);

// Example2
var arr1 = ["i", "like", "to", "code"];
var res1 = arr1.reduceRight((acc, val, index) => {
    console.log(acc);
    acc = acc + " " + val;
    return acc;

});
console.log(res1);

// Example3
var arr3 = [1, 2, 3, 4, 5];
var res3 = arr3.reduce((acc, val, index) => {
    console.log(acc);
    acc = (acc + val) * 2;
    return acc;

});
console.log(res3);