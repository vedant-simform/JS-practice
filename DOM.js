// getElementByID ------------------------>
console.log("------------ getElementByID ---------");

var x = document.getElementById("box2");
console.log(x);

// querySelector ------------------------>
console.log("------------ querySelector ---------");

var x = document.querySelector(".form-element");
console.log(x);



// querySelectorAll ------------------------>
console.log("------------ querySelectorAll ---------");

var y = document.querySelectorAll(".form-element");
console.log(y);



// InnterText ------------------------>
console.log("------------ innertext ---------");

console.log(x.innerText);

// Adding Style ------------------------>
console.log("------------ Adding Style ---------");
var x = document.querySelector("div #input1 input");
x.style.backgroundColor="red";
console.log(x);

// Get & Set Attribute ------------------------>
console.log("------------ Get & Set Attribute ---------");

var x = document.querySelector("div #input3 input");

console.log(x.getAttribute("type"));
console.log(x.setAttribute("type","checkbox"));

// DOM Travasal ------------------------>
console.log("------------ DOM Travasal ---------");

let traval = document.getRootNode();
console.log(traval);

console.log(traval.childNodes);
console.log(traval.childNodes[0]);
console.log(traval.childNodes[1].childNodes);
console.log(traval.parentNode);
console.log(traval.childNodes[1].childNodes[0].nextSibling);

let travalN = document.getElementById("box2");
// console.log(box2.innerHTML);
console.log(box2.childNodes);
console.log(travalN);

let pick = travalN.querySelector("h2");
console.log(pick);

console.log(traval.childNodes);

// Class manipulation ------------------------>
console.log("------------ Class manipulation ---------");

console.log(document.querySelector(".form-element").classList);

let manOb = document.querySelector(".form-element");
manOb.classList.toggle(".newClass");

console.log(document.querySelector(".form-element").classList);



// let arr = [1,2,3,4,5];
// console.log(arr);

// arr = [];
// console.log(arr);


let adding = document.createElement("h4");
adding.textContent="This is new heading (Append)";

let addPick = document.querySelector(".app-box");
addPick.append(adding);
console.log(addPick)

// Event Listener ------------------------>
console.log("------------ Event Listener ---------");

let submission = document.querySelector("#submit");

submission.addEventListener("click",()=> alert("Successfully Submitted"));




