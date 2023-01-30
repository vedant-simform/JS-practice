// Timeout Function ------------------>

let x = () => {
    for(let i=1 ;i<=5;i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000)
    }
}
// x();

// Arrow Function ------------------>

let arw = (name) => console.log(name);

arw("Vedant");

// Event Listner ------------------>

document.getElementById("click-me").addEventListener("click", () => console.log("Clicked"));

function call(name){
    alert("Welcome"+name);
}

let y = call("Vedant");
y();


//Hoisting------------------>
// var is hoisted but Let & const are not hoisted
// Let & const are hoisted differently

console.log(h);
var h=10;

// console.log(h1);
// let h1=hello //This will give error



// String Operations------------------>
// Description:- Strings are immutable
let str_name="Vedant   ";

console.log(str_name.length);

str_name= str_name.trim();
console.log(str_name.length);


//toUpperCase()
//toLowerCase()
//slice(startindex,endindex); --> End index will ot be included


// Type converstion ------------------>
let n=17;
let str="34";

// console.log(Number(str));
console.log(typeof(+str))
console.log(typeof(n+ ""));


//Arrayys ------------------>
//Desc:- Arrays are type of objects , Mutable

let arrFirst = ["Hello","This","Array"];

console.log(Array.isArray(arrFirst));
console.log(typeof(arrFirst));





