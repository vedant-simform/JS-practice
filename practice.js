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

// document.getElementById("click-me").addEventListener("click", () => console.log("Clicked"));

function call(name){
    // alert("Welcome"+name);
    console.log(name+" Hello");
}

let y = call("Vedant");
// y;


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


// Arrayys ------------------>
// Desc:- Arrays are type of objects , Mutable

let arrFirst = ["Hello","This","Array"];

console.log(Array.isArray(arrFirst));
console.log(typeof(arrFirst));


for(let item of arrFirst){
    console.log(item);
}

// Array Destructuring------------------>

let arr1=["abc","def","ghi","jkl"];
let [var1,var2,...var3]=arr1;
console.log(var1);
console.log(var2);
console.log(var3);





// Objects ---------------->
let person = {
    name : "Vedant",
    company : "Simform Solutions",
    ID : 100
}
console.log(person.name);
console.log(person["company"]);
console.log(person);

for(let key in person){
    console.log(person[key]);
}

for(let key of Object.keys(person)){
    console.log(person[key]);
}

// Practice questin ---------------->

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myval1";
const value2 = "myval2";

const obj = {}

obj[key1]=value1;
obj[key2]=value2;

console.log(obj);

let {objkey1:Lvar1,objkey2:Lvar2} = obj;

console.log(Lvar1,Lvar2);


// Object inside Arrays -------------------------->
let objArr=[
    {
        ID : 1,
        name : "Vedant"
    },
    {
        ID : 2,
        name : "Raj"
    },
    {
        ID : 3,
        name : "Harsh"
    }
]

console.log(objArr);
for(let user of objArr){
    console.log(user);
}

for(let user of objArr){
    console.log(user.name);
}
