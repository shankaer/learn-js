 document.documentElement.style.backgroundColor="LIGHTBLUE";
 function deleteTask(li){
    let taskValue = li.querySelector("span").innerText;
     let deletedtime = new Date();
     deletedhistory(taskValue, deletedtime);
    li.remove();

    alert(taskValue + " is being deleted");
    li.remove();
 }

 function addTaskOnClick(event){
    if(event.key === "Enter"){
        addTask();
    }
 }
 function addTask(){
    let taskValue = document.getElementById("taskinput").value;
    createTaskListItem(taskValue);
    document.getElementById("taskinput").value = "";
 }
 function getTaskValueSpan(taskValue){
    let span = document.createElement("span");
    span.innerText = taskValue;
    return span;
 }
 function getDeleteButton(){
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "del";
    deleteBtn.addEventListener("click", function(){
        deleteTask(this.parentElement);
    });
    return deleteBtn;
 }
 function createTaskListItem(taskValue){
    let li = document.createElement("li");
    let span = getTaskValueSpan(taskValue);
    let deleteBtn = getDeleteButton();
    li.appendChild(span);
    li.appendChild(deleteBtn);
    let listContainer = document.getElementById("list");
    listContainer.appendChild(li);
 }
 function deletedhistory(taskValue , deletedtime){
   let li=document.createElement("li");
   let time =deletedtime.toLocaleString();
    let span = document.createElement("span");
    span.innerHTML=`${taskValue}: deleted at:${time}`
    li.appendChild(span);
    document.getElementById("deleted").appendChild(li);
 }

//  // TODO Event listener is doing too much. Separation of concerns is important.
//  document.getElementById("addbtn").addEventListener("click", function(){

//             let taskValue = document.getElementById("taskinput").value;

//              let li = document.createElement("li");
//                 li.innerText = taskValue;
                
//                 document.getElementById("list").appendChild(li);
//                 let deleteBtn = document.createElement("button");
// deleteBtn.innerText = "del";

// deleteBtn.addEventListener("click", function(){
//     alert(li.innerText + " is being deleted");
//     li.remove();
// });

// li.appendChild(deleteBtn);
                
//            document.getElementById("taskinput").value="";
//         });
