// =============== Object===========================
// Example1
var obj = {
    country: ["india", "pakistan", "america", "england"]
}
let res4 = `<select><option>country</option>`;
let mapp = obj.country.map((val) => {
    res4 += `<option>${val}</option>`;
});
res4 += `</select>`;
document.getElementById("res").innerHTML = res4;

// Example2
let salary = {
    basic: 5000,
    lta: 1000,
    pf: 1500,
    findgross: function() {
        let gr = this.basic + this.lta + (this.pf * 0.75);
        return gr;
    },
    inhand: function() {
        let ih = this.findgross() - this.pf;
        return ih;
    }
}
console.log(salary.findgross());
console.log(salary.inhand());

// =============== Object===========================
let emp={
    name:"ram",
    job:"coder"
}

let emp1={
    address:"kolkata",
    id:1
}

let dup={...emp,...emp1};
console.log(dup);

let person={
    id:10,
    name:"ram",
    address:"kolkata",
    contact:{
        phone:987654321,
        mail:"demo@g.com"
    }
}
const{id,name,address,contact}=person;
console.log(id);
console.log(name);
console.log(address);
console.log(contact.phone);
console.log(contact.mail);