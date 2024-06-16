function validate() {
    let n = document.test.name.value;
    let a = document.test.age.value;
    let p = document.test.password.value;
    let cp = document.test.cpassword.value;
    let g = document.test.gen.value;
    let l = document.test.loc.value;
    if (n.length < 5 || n.length > 10) {
        alert("Name should betwen 5 to 10");
        return false;
    } else if (a < 18 || a > 25) {
        alert("Age should betwen 18 to 25");
        return false;
    } else if (p.length < 5 || !p.includes("@")) {
        alert("Password length should be 5 and includes @");
        return false;
    } else if (p != cp) {
        alert("Password and confirm password does not match");
        return false;
    } else if (g == "" || g == null) {
        alert("gender not selected");
        return false;
    } else if (l == "" || l == null) {
        alert("location not selected");
        return false;
    } else {
        alert("form is ready to submit");
        return true;
    }
}
// ==============================================
function validate1() {
    let opt = document.test1.lang.options;
    let c = 0;
    let res = "";
    for (i = 0; i < opt.length; i++) {
        if (opt[i].selected == true) {
            c++;
            res = res + " " + opt[i].value + " ";
        }
    }
    if (c == 0) {
        alert("Lang not selected");
        return false;
    } else {

        console.log(res);
        alert("submit is ready");
        return true;

    }
}

// ==============================================
function validate2() {
    let opt = document.test2.deg;
    let c = 0;
    let res = "";
    for (i = 0; i < opt.length; i++) {
        if (opt[i].checked == true) {
            c++;
            res = res + " " + opt[i].value + ",";
        }
    }
    if (c == 0) {
        alert("Degree not selected");
        return false;
    } else {

        console.log(res);
        alert(`Degree: ${res}`);
        return true;

    }
}
// ==============================================

function getting() {
    let sen = document.getElementById("sen").value;
    let arr = sen.split(" ");
    console.log(arr.length);
    let c = 0;
    for (i = 0; i < sen.length; i++) {
        if (sen[i] == " ") {
            c++;
        }

    }
    console.log(`Total word: ${c+1}`);
}