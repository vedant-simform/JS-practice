// let x = prompt("Your name","Soni");
// console.log(x);


var arr = [1,2,3,4,5,6];

arr.forEach((val,index) => {
    console.log(arr[index],index)
});

// Map Function ------------------------>
console.log("------------ Map Function ---------");
function mapping(digit){
    return digit*digit;
}


var x = arr.map(mapping);
console.log(x);


// Filter Function ------------------------>
console.log("------------ Filter Function ---------");

function fil(evenNo){
    return evenNo%2===0;
}

var x = arr.filter(fil);
console.log(x);

// Reduce Function ------------------------>
console.log("------------ Reduce Function ---------");

var arr = [10,20,30,40,50,60];

function red(firstVal,secondVal){
    return firstVal+secondVal;
}

var x = arr.reduce(red,100)
console.log(x);

// Sort Function ------------------------>
console.log("------------ Sort Function ---------");

var arr = [10,20,30,40,50,60];


var x = arr.sort((a,b)=>b-a);
console.log(x);

// Every Function ------------------------>
console.log("------------ Every Function ---------");

const cart = [
    {ID: 1, product : "Headphone", price : 300},
    {ID: 2, product : "Laptop", price : 250},
    {ID: 3, product : "Mouse", price : 500}
]

var x = cart.every((items)=>items.price<=5000)
console.log(x);

// Some Function ------------------------>
console.log("------------ Some Function ---------");

var x = cart.some((items)=>items.price<=250)
console.log(x);

// Find Function ------------------------>
console.log("------------ Find Function ---------");

var x = cart.find((product)=>product.ID=2);
console.log(x);

// Map Structure ------------------------>
console.log("------------ Map Data Structure ---------");

const ds= new Map([["ID",01],["Age","21"]]);

ds.set("name","Vedant");

console.log(ds);
console.log(Array.isArray(ds));
console.log(typeof(ds));
// ds.set();

console.log(ds.get("Age"));

//Optional chaining
console.log("------------ Optional chaining ---------");

const objOp = {
    "name" : "Hi",
    "Age" : 21,
    minOb : {
        "name2" : "Hello"
    }
}

console.log(objOp?.minOb?.name2);

// This concepts
console.log("------------ This concepts ---------");

const tempObj = {
    "name" : "Vedant",
    "age" : 21,
    minOb : function (){ console.log(`Your name is ${this.name} and age is ${this.age}`)}
}

tempObj.minOb();

// Call Function
console.log("------------ Call Function---------");

function headFun(){
    console.log("My name is "+this.fname+" and age is "+this.age);
}

const headObj = {
    "fname" : "Vedant",
    "age" : 21
}
const headObj2 = {
    "fname" : "Soni",
    "age" : 22
}

headFun.call(headObj);
headFun.call(headObj2);

// This in Function Expression Issue
console.log("------------ This in Function Expression Issue---------");

const tryObj = {
    "name" : "Vedant",
    "age" : 21,
    minOb : function (){ console.log(`Your name is ${this.name} and age is ${this.age}`)}
}

// let tryvar = tryObj.minOb;       This will give undefine
let tryvar = tryObj.minOb.bind(tryObj);
tryvar();


