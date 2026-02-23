console.log("javascript is running");
function changeText(){
    document.getElementById("title").innerText="You clicked the button!";
}
function showTime(){
    const curr=new Date();
    const timestring=curr.toLocaleTimeString(navigator.language,{hour: '2-digit' , minute:'2-digit'});
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