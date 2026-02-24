document.documentElement.style.backgroundColor="black";
document.documentElement.style.color="lightblue";
function getid(){
return document.getElementById("userid").value;

}
async function getuser(){
let id=getid();
 let res= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
 let user=await res.json();
 return user;
}
function addTaskOnClick(event){
    if(event.key === "Enter"){
        userdetails();
    }
 }

async function userdetails(){
 let userresult = await getuser();
  document.getElementById("result").innerHTML=
 `<h1>${userresult.name}</h1>
 <p>${userresult.email}</p>
`
document.getElementById("userid").value="";
}
