if (window.confirm("Do you want to visit this website?")) {
    let age = prompt("Enter your age");
    if (age < 18) {
        alert("You are not eligible");
        window.close();
    } else {
        alert("You are eligible");

    }
} else {
    window.close();
}
// ========================
function myfunc() {
    let n = document.myform.nm.value;
    let age = document.myform.age.value;
    let dept = document.myform.dept.value;
    document.getElementById("showdata").innerHTML = `
    <ol>
    <li>Name: ${n}</li>
    <li>Age: ${age}</li>
    <li>Dept: ${dept}</li>
    </ol>
    `;
}
// ========================
function myfunc1() {
    let first = document.myform1.first.value;
    let second = document.myform1.second.value;

    document.getElementById("add").innerHTML = parseInt(first) + parseInt(second);
    document.getElementById("sub").innerHTML = parseInt(first) - parseInt(second);
    document.getElementById("mul").innerHTML = parseInt(first) * parseInt(second);
    document.getElementById("div").innerHTML = parseInt(first) / parseInt(second);

}
// ========================
let arr = [];
let sum = 0;
for (i = 0; i < 5; i++) {
    arr[i] = prompt(`Enter number in cell no ${i}`)
};
for (i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        sum = sum + parseInt(arr[i])
    }

}
console.log(sum);
// ========================
let arr1 = [];
for (i = 0; i < 5; i++) {
    arr1[i] = prompt(`Enter number in cell no ${i}`)
};
console.log(arr1);
let sorted = arr.sort((a, b) => {
    a - b
});
document.write(
    ` Min: ${sorted[0]} <br>
   Max: ${sorted[sorted.length-1]}
   `
)
// ========================
function myfunc() {
    let word = document.getElementById("word").value;
    console.log(word);
    for (j = 0; j <= arr.length; j++) {
        if (arr[j] == word) {
            console.log(`the index: ${[j]}`)
        }
    };
}
// ========================
function showdata() {
    let lg = document.getElementsByName("lang");
    let langres = "";
    for (i = 0; i <= lg.length; i++) {
        if (lg[i].checked == true) {
            langres = langres + lg[i].value + " ";
        }
    }
    document.getElementById(div1).innerHTML = `language: ${langres}`
}
// ========================
let name="atanu";
let age=24;
let job="coder";
console.table([name,age,job]);