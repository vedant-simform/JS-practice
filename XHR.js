// const URL = "https://jsonplaceholder.typicode.com/posts";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", URL); //GET,POST,FETCH...

// xhr.send();
// console.log(xhr);

// // xhr.onload = function () {
// //   const l = xhr.response;
// //   console.log(l);
// // };

// async function abc() {
//   for (let i = 0; i < 100000000; i++) {
//     console.log("first");
//   }
//   for (let i = 0; i < 10000; i++) {
//     console.log("second");
//   }
// }

console.log("Before Promise ");

function prom(vote) {
  return new Promise((resolve, reject) => {
    if (vote == 143) {
      resolve(5);
    } else {
      reject(10);
    }
  });
}

async function asnnc() {
  let a = await prom(143);
  console.log("Inside");
  console.log(a);
}

asnnc();

console.log("Should be after execution");

// prom(143)
//   .then(() => {
//     console.log("Success");
//   })
//   .catch(() => {
//     console.log("Fail");
//   });

// console.log("");

// console.log("");

// console.log("");

// Storage

localStorage.setItem("name", "Vedant");
localStorage.setItem("ID", 1);
localStorage.removeItem("ID");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name", "Soni");

document.cookie = "name=Vedant Soni";
