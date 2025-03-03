//var btn = document.querySelector("button")
///var p = document.querySelector("p")

//btn.addEventListener("click",function(){
 // p.textContent = "Button clicked";

//})


/*ar img1 = document.querySelector("#hello");
var img2 = document.querySelector("#jeck");


var btn = document.querySelector("button");
btn.addEventListener("click",function(){
  var one = hello.src
  var two = jeck.src

    jeck.src = one ;
    hello.src = two ;
   
})
*/





var inp = document.querySelector("#two")



var form = document.querySelector("form");
var inputOne = document.querySelector("#one"); // Select the input field by its ID

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log(inputOne.value);
    if (inputOne.value===''){
      alert("Please enter your name");
      

    } else {
      alert("Hello, " + inputOne.value + "!");
    }
});



