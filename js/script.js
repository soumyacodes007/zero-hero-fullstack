

let nigga = a =>{
  a = 13 
  console.log(a)
}


// rest operators 

function abcd (a,b,c,...ok){
  console.log(a,b,c,ok)
}
abcd(1,2,3,4,5,6,7,8,8)



// hoisting 


console.log(a)
var  a = 10 
/*reason is 
bachha phele agya kam krne se cause 
var a (eta oppre jai )
a=10
*/



// high levek function 

function hello (){
  console.log("he")
  return function (){
    console.log("hello")
  }
}


hello()()



function rick (okbro)
{
 okbro()
}

rick(function(){
  console.log("hello rick !")
})


