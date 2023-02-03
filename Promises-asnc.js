let pVar = new Promise((resolve, reject) => {
  let a = true;
  if (a == true) {
    resolve("True");
  } else {
    reject("false");
  }
});

pVar
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");
let heading3 = document.querySelector("#heading3");
let heading4 = document.querySelector("#heading4");
let heading5 = document.querySelector("#heading5");
let heading6 = document.querySelector("#heading6");

function headingChange(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        console.log("hi");
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

headingChange(heading1, "one", "red", 1000)
  .then(() => {
    return headingChange(heading2, "two", "blue", 1000);
  })
  .then(() => {
    return headingChange(heading3, "three", "purple", 1000);
  })
  .then(() => {
    return headingChange(heading4, "four", "pink", 1000);
  })
  .then(() => {
    return headingChange(heading5, "five", "grey", 1000);
  })
  .then(() => {
    return headingChange(heading6, "six", "yellow", 1000);
  })
  .catch(() => {
    console.log("Error");
  });
