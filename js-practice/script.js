console.log("javascript is running");
function changeText(){
    document.getElementById("title").innerText="You clicked the button!";
}
function showTime(){
    const curr=new Date();
    const timestring=curr.toLocaleTimeString();
    document.getElementById("time").innerText="current time: "+ timestring;
}
function changecolor(){
    
    document.body.style.backgroundColor="LIGHTBLUE";

}
function details(){
    let user={
        name:"Raunak",
        age:21,
        greet: function() {
            return "hello "+this.name;
        }
    }
     document.getElementById("detail").innerText = user.greet();
}
// TODO Please extract this into a separate function
document.getElementById("btn").addEventListener("click", function(){
    console.log("handled with event listener");
});
document.getElementById("submitBtn").addEventListener("click" , function(){
    let name=document.getElementById("nameinput").value;
    document.getElementById("output").innerText="Welcome "+ name;
});
let user=[{name: "A" , age: 20},{name:"b" , age:25}];
user.forEach(function(user){
    console.log(user.name)
});