let myobj = {
    salary: 80,
    pf: 20
}

function findTotal(time) {
    let result = this.salary * this.pf * time;
    return result;
}

let r1 = findTotal.call(myobj, 2);
document.write("Call: " + r1 + "<br>");

let r2 = findTotal.apply(myobj, [3]);
document.write("Call: " + r2 + "<br>");

let r3 = findTotal.bind(myobj, 4);
document.write("Call: " + r3() + "<br>");

function employee(id, name) {
    this.eid = id;
    this.ename = name;
}
employee.prototype = {
    gen: "male",
    loc: "kolkata",
    job: "coding"
}

let emp1 = new employee(101, "ram");
let emp2 = new employee(102, "sam");
let emp3 = new employee(103, "tom");
console.log(emp1.gen);
console.log(emp2.loc);
console.log(emp3.job);