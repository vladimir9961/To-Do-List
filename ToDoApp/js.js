let input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});





//if empty is true then do this >>>
function empty(){
  // Selecting the input element and get its value 
  if(document.getElementById("input").value.length === 0)
  {
      alert("You cannot leave empty input field")
  } else{
    let inputVal = document.getElementById("input").value;
    // Appending the value from input in created element
    let newTH = document.createElement('li');      
    newTH.setAttribute("id", "list");

    //Creating paragraf inside li
    let newP = document.createElement('p'); 
    newTH.appendChild(newP);
    newP.innerHTML = inputVal;
    
   
      
      //Creating button for delete
      let newBtn = document.createElement('button');
      newBtn.setAttribute("id", "btn"); 
      newBtn.innerHTML = "Done";
      newTH.appendChild(newBtn);

       //Creating ul but multiple times
    let creUl = document.createElement('ul');  
    creUl.setAttribute("id", "list-ul");
    creUl.appendChild(newTH);


    //Creating li
    let table = document.getElementById('todo-list');
    table.appendChild(creUl);
    
   

    newBtn.onclick = function() {
      let delBtn = newTH;
      delBtn.remove();

      
      
    };
   
  };
};

//Button For Deleting Items From Li
function myFunction() {
    let myobj = document.getElementById("list");
    myobj.remove();
    let btnbtn = document.getElementById("btn");
    btnbtn.remove();
}

