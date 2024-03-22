//dom document object model
console.log(window.document)  //html file console py dekhna k liya
console.dir(window.document);  //html element jo javascript k through use kr k change kr skta hain
console.dir(document); // dono same way hai likhna k

// getElementById
const heading = document.getElementById("heading");
console.log(heading);
console.log(typeof heading); // checking typeof 

//query selector and change the html through query selector

let quer = document.querySelector("h1");
quer.addEventListener("click",()=>{
  quer.style.color="red";
})
quer.innerHTML=13;

//change the css through js
quer.style.background="grey";

// event listener
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
  btn.style.backgroundColor= "grey";
})