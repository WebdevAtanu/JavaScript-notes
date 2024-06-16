//nav text color and background.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "lightyellow";
})

//inner and outer html.	
console.log(document.getElementById('pid').innerHTML);
console.log(document.getElementById('pid').outerHTML);

//prints the text content of the dom
console.log(document.body.textContent);

//attribute function
let att = document.getElementById("attributeID");
console.log(att.getAttribute("class")); //it shows the class name of the div
att.setAttribute("hidden", "true"); //it hidden the div content
att.setAttribute("class", "newClassName") //it will change the class name of the div
//att.removeAttribute("class");//it will remove the class from div
console.log(att.getAttribute("class"));
console.log(att.attributes); //it shows the all attributes of the div
console.log(att.dataset);

//createElement
let i;
for (i = 0; i <= 5; i++) {
    let div = document.createElement("div");
    div.innerHTML = `${i} "This is come from createElement function using for loop"`
    document.body.append(div);
    document.body.prepend(div); //it will create div first after body 
}

//adjacent html function
let adjacent = document.getElementById("adjacent");
adjacent.insertAdjacentHTML("beforeend", "<div>beforeend</div>");
adjacent.insertAdjacentHTML("beforebegin", "<div>beforebegin</div>");
adjacent.insertAdjacentHTML("afterbegin", "<div>afterbegin</div>");
adjacent.insertAdjacentHTML("afterend", "<div>beforeend</div>");
adjacent.remove();

//adding or removing class name 
let addclass = document.getElementById("clsadd");
addclass.className = "skyblue";
addclass.classList.add("lightgreen");
addclass.classList.remove("textColor");
addclass.classList.toggle("textColor");

//event
let btnevnt = function() {
    alert("Button clicked");
}
btnevt.addEventListener("click", btnevnt);
// btnevt.removeEventListener("click",btnevnt); for removing the event

//adding a script into body
function addScript(src, callback) {
    var newscript = document.createElement("script");
    newscript.src = src;
    document.body.appendChild(newscript);
    newscript.onload = function() {
        console.log("Added script with src: " + src);
        callback();
    }
    newscript.onerror = function() {
        console.log("Error on loading the script");
    }
}

function Hello() {
    console.log("Script Added");
}
addScript("external.js", Hello);
