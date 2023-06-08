// Step 1: Get references to the elements
const input = document.querySelector("#addToDo");
const todoList = document.querySelector("ul");

// Step 2: Add event listener for adding a task
input.addEventListener("keydown", function(e){
   if (e.keyCode === 13){ // Enter key is pressed
    const taskText = input.value.trim(); // Get the task text from the input field
     if (taskText !== ""){  // Make sure the input is not empty
         const li = document.createElement("li"); // Create a new <li> element
        li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`; // Set the content of the <li> element
        todoList.appendChild(li); // Append the <li> element to the <ul>
        input.value = ""; // Clear the input field
     }
  }
});

// Step 3: Add event listener using event delegation for deleting a task
todoList.addEventListener("click", function(e) {
  if (e.target.tagName === "I" && e.target.classList.contains("fa-trash")) { // Check if the clicked element is the "delete" icon
    const li = e.target.parentElement.parentElement; // Get the parent <li> element
    li.remove(); // Remove the <li> element from the <ul>
  }
});