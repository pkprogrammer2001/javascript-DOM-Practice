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