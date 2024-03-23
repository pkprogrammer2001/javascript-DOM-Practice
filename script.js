//dom document object model
console.log(window.document)  //html file console py dekhna k liya
console.dir(window.document);  //html element jo javascript k through use kr k change kr skta hain
console.dir(document); // dono same way hai likhna k

// getElementById
const heading = document.getElementById("heading");
console.log(heading);
console.log(typeof heading); // checking typeof 

//query selector and change the html through query selector
// query selector kis bi element k liya use ho skti hai
let quer = document.querySelector("h1");
quer.addEventListener("click",()=>{
  quer.style.color="red";
})
quer.innerHTML=13;

//query selector all
const head2 = document.querySelectorAll(".h2");
console.log(head2);

//textContent
const text1 = document.getElementById("text1")
console.log(text1.textContent) // text content sy pura content get hota hai jo element ma hai even jo content display none yn hide bi hoga webpage ma
// innerText
const text2 = document.getElementById("text2")
console.log(text2.innerText) // innerText sy sirf woh content get hota jo webpage py display hota hai.... 
//change the css through js
quer.style.background="grey";

// get attribute
const get1 = document.querySelector(".todo #todo-text")
get1.setAttribute("type", "number");
console.log(get1.getAttribute("type"));

//set attritube
const get2 = document.querySelector(".todo .a-tag")
get2.setAttribute("href","http://github.com/pkprogrammer2001")
console.log(get2.getAttribute("href"));


// event listener
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
  btn.style.backgroundColor= "grey";
})

// class name
const head3 = document.getElementsByClassName("h2"); // class name return htmlCollection
console.log(head3[0]);
for(let i=0; i< head3.length; i++){
  // console.log(head3[i]);
  const newhead = head3[i];
  newhead.style.backgroundColor="black";
  newhead.style.color="white";
};
//query selector
const head4 = document.querySelectorAll(".h3");  // query selector return nodelist
console.log(head4[3])
head4.forEach(function(val){
  val.style.backgroundColor= "maroon";
  val.style.color= "white";
})