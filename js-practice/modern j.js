document.getElementById("add").addEventListener("click" ,function(){let add=(a,b)=>a+b;
console.log(add(2,3))});
function user(){
let name ="rahul";
console.log(`hello ${name}`);}
async function loaddata(){
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1");
     let data= await res.json();
     console.log(data);
}

