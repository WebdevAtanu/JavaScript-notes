//cookie
document.cookie = "Name=Atanu";
console.log(document.cookie);

//local storage
let key = prompt("Enter the key");
let val = prompt("Enter the value");
localStorage.setItem(key, val);
console.log(`the value at ${key} is ${localStorage.getItem(key)}`);
// localStorage.removeItem(key); //to remove the key
// localStorage.clear(); //to clear the local storage

//storage item change
window.onstorage = (e) => {
    alert("some value is changed in the storage")
    console.log(e);
}