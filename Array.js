let arr1 = ["ant", "camera", 1, 100, "String"]
let arr2 = ["ant", "camera", 1, 100, "String"]
let sortArr = ["ram", "tom", "jerry", "sam"];
console.log("Array methods");
console.log(arr1.length); //array length
console.log(arr1.toString());
let popElement = arr1.pop(); //pop the last array element and return it
console.log(arr1.toString());
let shiftElement = arr1.shift(); //remove the last element and return it
console.log(arr1.toString());
arr1.push("newElement", 50);
console.log(arr1.toString());
console.log(arr1.join("-")); //join - in the middle of array elements
arr1.unshift("newElement"); //add new element to the begining of the array
delete arr1[1]; //delete indexed element but does not change the length
console.log(arr1.concat(arr2)); //concat the two array
sortArr.sort(); //sort the array in alphabetical order
arr1.reverse(); //reverse the array

let str = "atanu";
let strarr = Array.from(str); //convert the string into array
console.log(strarr);

let arrmap = [1, 2, 3, 4] //Array mapping to create new array
let mappedarr = arrmap.map((value, index) => {
    console.log(index, value);
    let res = value * value;
    return res;
})
console.log(mappedarr);

let arrfil = [1, 2, 3, 4] //filterring the array
let afill = arrfil.filter((value) => {
    res = value < 4;
    return res;
})
console.log(afill);

let arrReduce = [1, 2, 3, 4] //reduce function that multiply all the elements
let ared = arrReduce.reduce((first, second) => {
    res = first * second;
    return res;
})
console.log(ared);