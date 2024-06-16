function focus1() {
    document.getElementById("name").innerText = "Enter name";
}

function blur1() {
    document.getElementById("name").innerText = "";
}

function focus2() {
    document.getElementById("loc").innerText = "Enter location";
}

function blur2() {
    document.getElementById("loc").innerText = "";
}

function up() {
    let val = document.getElementById("inp").value;
    document.getElementById("show").innerText = val;
}

function down() {
    document.getElementById("show").innerText = "******************";
}
var c = 0;

function count() {

    document.getElementById("count").innerHTML = ++c;
}

function calc() {
    let num = document.getElementById("num").value;
    let checkval = document.test.op.value;
    console.log(num * checkval);
}

function calc() {
    let num = document.getElementById("num").value;
    if (event.target.name == "op1") {
        console.log(num * event.target.value);
    } else if (event.target.name == "op2") {
        console.log(num * event.target.value);
    } else if (event.target.name == "op3") {
        console.log(num * event.target.value);
    }
}
var x = 0;
var y = 0;
var z = 0;

function enter() {
    document.getElementById("c1").innerHTML = `Enter count ${++x}`;
}

function out() {
    document.getElementById("c2").innerHTML = `Enter count ${++y}`;
}

function move() {
    document.getElementById("c3").innerHTML = `Enter count ${++z}`;
}

var c = 0;
function change() {
    document.getElementById("count").innerHTML = `mouse over: ${++c}`;
    document.getElementById("para").style.display = "block";
}