document.body.style.backgroundColor="black";
document.body.style.color="lightblue";
document.getElementById("searchbtn").addEventListener("click" , async function(){
let id=document.getElementById("userid").value;
  let res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
let user =await res.json();
 document.getElementById("result").innerHTML=
 `<h1>${user.name}</h1>
 <p>${user.email}</p>
`
document.getElementById("userid").value="";
});