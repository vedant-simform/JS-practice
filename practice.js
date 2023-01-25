// Timeout Function

let x = () => {
    for(let i=1 ;i<=5;i++){
    setTimeout(function timer(){
        console.log(i);
    },i*1000)
    }
}
x();

// Arrow Function

let arw = (name) => console.log(name);

arw("Vedant");

// Event Listner

document.getElementById("click-me").addEventListener("click", () => console.log("Clicked"));