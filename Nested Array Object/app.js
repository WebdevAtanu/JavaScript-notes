// =============== Nested array===========================
// Example1
let arr2 = {
    data: [{
        id: 10,
        name: 'ram',
        loc: "kolkata"
    }, {
        id: 20,
        name: 'sam',
        loc: "pune"
    }, {
        id: 30,
        name: 'jadu',
        loc: "delhi"
    }, {
        id: 40,
        name: 'madhu',
        loc: "chennai"
    }]
};

let res5 = `<table border=1 style="width:100%; border-collapse:collapse">`;
let data = arr2.data.map((val) => {
    res5 += `<tr>
    <td>${val.id}</td>
    <td>${val.name}</td>
    <td>${val.loc}</td>
    </tr>`;
})

res5 += `</table>`;
document.getElementById("res").innerHTML = res5;

// Example2
var stud = {
    name: "raj",
    address: {
        city: "kolkata",
        state: "wb",
        geo: {
            lat: 45,
            lng: 35,
            dir: {
                loc: "northeast"
            }
        }
    }
}

console.log(stud.name);
console.log(stud.address.city);
console.log(stud.address.state);
console.log(stud.address.geo.lat);
console.log(stud.address.geo.lng);
console.log(stud ?.address ?.geo ?.dir ?.loc); //optional chaining will show undefined

// Example3
let arr = [{
        id: 10,
        name: "ram",
        loc: {
            st: "wb",
            pin: 102,
            city: "kolkata"
        }
    }, {
        id: 20,
        name: "sam",
        loc: {
            st: "mh",
            pin: 103,
            city: "mumbai"
        }
    }, {
        id: 30,
        name: "jadu",
        loc: {
            st: "tn",
            pin: 104,
            city: "chennai"
        }
    }


];

let res = `<table border=1 style="border-collapse:collapse; width:100%">`;
arr.map((val) => {
    res = res + `
        <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.loc?.st}</td>
        <td>${val?.loc?.pin}</td>
        <td>${val?.loc?.city}</td>
        </tr>
    `;
})

res = res + `</table>`;
document.getElementById("res").innerHTML = res;