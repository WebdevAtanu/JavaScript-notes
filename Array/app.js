var arr = [10, 20, "hello", "welcome", 3.4, 10];
console.log(arr.toString());
console.log(arr.join("#"));
console.log(arr.slice(2, 4));
console.log(arr.indexOf("hello"));
console.log(arr.indexOf(10, 2));
console.log(arr.lastIndexOf(10));
arr.push("react", 200);
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("react", 200));
console.log(arr);
// =======================================
let arr1 = ["apple", "java", "python", "mango", ];
let arr2 = [20, 65, 29, 99, 56, 49];
console.log(arr.includes("apple"));
console.log(arr.includes("php"));
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.sort().reverse());
console.log(arr1.sort());
console.log(arr1.sort().reverse());
console.log(arr.splice(2, 1, "banana", "php"));
console.log(arr);
console.log(arr.splice(2, 1));
console.log(arr);
console.log(arr.splice(2, 0, "potato", "css"));
console.log(arr);
// =======================================
let city = ["kolkata", "delhi", "patna", "bihar", "chennai", "bangaluru"];
let res = `<table border=1 style=width:90%>
<caption>city name</caption>
<tr><th>index</th>
<th>city</th></tr>`;
city.forEach((val, index) => {
    res = res + `<tr><td>${index}</td>
    <td>${val}</td></tr>`;
});
res = res + "</table>"
document.getElementById("d1").innerHTML = res;
// =======================================
let city1 = ["kolkata", "delhi", "patna", "bihar", "chennai", "bangaluru"];
let res1 = "<select multiple>";
let temp = city.map((val) => {
    return `<option>${val}</option>`;
})
res1 = res1 + temp.join() + "</select>"
document.getElementById("d1").innerHTML = res1;
// =======================================
let arr3 = [2, 3, 7, 14, 6, 13, 17, 16, 12];
let res2 = arr3.filter((val) => {
    for (i = 2; i < val; i++) {
        if (val % i == 0) {
            return false;
        } else {
            return true;
        }
    }

});
console.log(res2);
// =======================================
let word = ["kolkata", "chennai", "php", "css", "fan"];
let vowel = ["a", "e", "i", "o", "u"];
let res3 = word.filter((val) => {
    for (i = 0; i < vowel.length; i++) {
        if (val.includes(vowel[i])) {
            return true;
        } else {
            false;
        }
    }

});
console.log(res3);
// =======================================
let arr4 = ["ram", 2, 3, 4, "sam"]
let arr5 = [...arr];
arr5.push("newElem");
console.log(arr4)
console.log(arr5)
arr6 = [...arr4, ...arr5];
console.log(arr6);