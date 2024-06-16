let note="i am learning react now. REAct is use for website.";
document.write(`string length: ${note.length} <br>`);
document.write(`substring: ${note.slice(0,13)} <br>`);
document.write(`substring: ${note.substring(0,13)} <br>`);
document.write(`index: ${note.indexOf("react")}<br>`);
document.write(`replace: ${note.replace("react","web dev")}<br>`);
document.write(`regex global: ${note.replace(/react/g,"webdev")} <br>`);
document.write(`regex global insensitive: ${note.replace(/react/gi,"webdev")} <br>`);

let s1= "i am";
let s2= "react";
let s3= "learner";
let s4=s1.concat(s2,s3);
console.log(s4);

let s5="i am learning react now. react is use for website.";
let spl=s5.split(" ");
console.log(spl);

document.getElementById("btn").addEventListener("click",()=>{
    let sen=document.getElementById("sen").value;
    let senarr=sen.split(" ");
    console.log(`Sentence length ${senarr.length}`);
    for(i=0; i<senarr.length;i++){
        console.log(senarr[i]);
    }
})