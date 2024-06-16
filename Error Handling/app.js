// Example 1

function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    try {
        let sum = parseInt(num1) + parseInt(num2);
        document.getElementById("res").innerHTML = sum;
        if (isNaN(sum)) {
            throw ("There is a problem in input. Sum is not a number.");
        }
    } catch (error) {
        document.getElementById("res").innerHTML = error;
    }
}

// Example 2

try {
    let age = prompt("enter your age")
    age = Number.parseInt(age);
    if (age > 100) {
        throw new ReferenceError("Age is invalid");
    } else {
        console.log("age is- " + age)
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}