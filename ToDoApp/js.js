//on enter key press append function
let input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});


function empty(){
  // Selecting the input element and get its value 
  if(document.getElementById("input").value.length == 0)
  {
      alert("Nemoze prazno polje ticu")
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

     


    //Creating li
    let table = document.getElementById('todo-list');
    table.appendChild(newTH);
    
   

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

