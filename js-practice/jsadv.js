document.body.style.backgroundColor="#7866ff";
document.body.style.color="#66ffb7";
document.getElementById("Btn").addEventListener("click" , function(){
    let numbers=[2,4,6,8];
    let doubled= numbers.map(n=>n*2);
    console.log(doubled);
    let evens=numbers.filter(n=>n%2===0);
    console.log(evens);
    
    let totalprod=numbers.reduce((prod,n) => prod*n,1);
    console.log(totalprod);
    let li = document.createElement("li");
                li.innerText =`Doubled: ${doubled} 
Evens: ${evens}
Total: ${totalprod}`;
               document.getElementById("op").appendChild(li);
})
