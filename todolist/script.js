


// Setting Up Variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// Focus On Input Field
window.onload = function () {
  theInput.focus();
};
// Adding The Task

theAddButton.onclick = function () {
  // If Input is Empty

  if (theInput.value === "") {
     //alert("not valid")
     swal({
      title: "Error!",
      text: "input is empty",
      type: "error",
      confirmButtonText: "Ok"
    });
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      // Remove No Tasks Message
      noTasksMsg.remove();
    }
    //create main span element 
    let mainSpan=document.createElement("span");

    //create delete button 
    let deleteElement = document.createElement("span");

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    //add text to main span
    mainSpan.appendChild(text);

    //add class to main span 
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    //add delete button to main span
    mainSpan.appendChild(deleteElement);

    //add the task to the container
    tasksContainer.appendChild(mainSpan);

    //empty the input
    theInput.value='';

    //focus on field

    theInput.focus();

    // Calculate Tasks
    calculateTasks();

  }
};

document.addEventListener('click', function (e) {
  //delete task
  if (e.target.className=='delete') {
     
    //remove current task 
    e.target.parentNode.remove();

    if (tasksContainer.childElementCount == 0) {

      createNoTasks();

    }

  }
  //finish task  
  if (e.target.classList.contains('task-box')) {
    
    //toggle class finished
    e.target.classList.toggle("finished")
  }
  // Calculate Tasks
  calculateTasks();
})

// Function To Create No Tasks Message
function createNoTasks() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");

  //add text to span element
  msgSpan.appendChild(msgText)

  //add class to message span 
  msgSpan.className='no-task-message';

  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calculateTasks() {

  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
