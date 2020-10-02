//on enter key press append function
let input = document.getElementById("input");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

function information(){
  // Selecting the input element and get its value 
  if(document.getElementById("input").value.length == 0)
  {
      alert("NEMOZE PRAZNO POLJE!!!");  

  } else{
    let inputVal = document.getElementById("input").value;
    
    // Appending the value from input in created element
    let newTH = document.createElement('li');      
    newTH.setAttribute("id", "list");

    //Creating paragraf inside li
    let newP = document.createElement('p'); 
    newP.setAttribute("id", "paragraf");
    newTH.appendChild(newP);
    newP.innerHTML = inputVal;

    //Creating button for delete
    let newBtn = document.createElement('button');
    newBtn.setAttribute("id", "btn"); 
    newBtn.innerHTML = "Delete";
    newTH.appendChild(newBtn);

    //Onclick btn delete li element
    newBtn.onclick = function() {
      let delBtn = newTH;
      delBtn.remove();
    };

    //Creating button for done
    let btnDone = document.createElement('button');
    btnDone.setAttribute("id", "btnDone"); 
    btnDone.innerHTML = "Done";
    newTH.appendChild(btnDone);
    
    //toggle to set styles NOT FINISHED
    btnDone.onclick = function () {
      let element = newP;
      element.classList.toggle("line");
   }

    //Appends dates
    const inputTime = new Date().toISOString().slice(0, 10);
    let pTime = document.createElement('p');
    pTime.setAttribute("id", "pTime"); 
    pTime.innerHTML = inputTime;
    newTH.appendChild(pTime);

    //Creating li
    let table = document.getElementById('todo-list');
    table.appendChild(newTH);
  };

  document.getElementById('input').value = '';

};

//Button For Deleting All Items from Ul
function myFunction() {
  let e = document.querySelector("ul");        
  let child = e.lastElementChild;  
  while (child) { 
      e.removeChild(child); 
      child = e.lastElementChild; 
  }
};

