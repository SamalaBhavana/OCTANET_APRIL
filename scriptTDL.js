// Select the Add button
var addButton = document.getElementById("addButton");

// Add click event listener to the Add button
addButton.addEventListener("click", function() {
    // Get the input value
    var input = document.getElementById("taskInput").value;

    // Check if input is empty
    if (input.trim() === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.classList.add("task");

    // Create checkbox for completed tasks
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkGreen";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            // Apply underline style to the task text when checkbox is checked
            taskText.style.textDecoration = "underline";
        } else {
            // Remove underline style when checkbox is unchecked
            taskText.style.textDecoration = "none";
        }
    });

    // Create span for task text
    var taskText = document.createElement("span");
    taskText.textContent = input;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "removeRed";
    removeButton.addEventListener("click", function() {
        // Remove the task when remove button is clicked
        this.parentElement.remove();
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(removeButton);

    // Append the list item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field after adding task
    document.getElementById("taskInput").value = '';
});
