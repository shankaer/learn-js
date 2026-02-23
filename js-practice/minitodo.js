 document.body.style.backgroundColor="LIGHTBLUE";

 document.getElementById("addbtn").addEventListener("click", function(){

            let taskValue = document.getElementById("taskinput").value;

             let li = document.createElement("li");
                li.innerText = taskValue;
                
                document.getElementById("list").appendChild(li);
                let deleteBtn = document.createElement("button");
deleteBtn.innerText = "del";

deleteBtn.addEventListener("click", function(){
    li.remove();
});

li.appendChild(deleteBtn);
                
           document.getElementById("taskinput").value="";
        });