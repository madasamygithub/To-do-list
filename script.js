const tasks = []; // An array to store tasks

// Function to add a new task
function addTask() {
    const taskText = document.getElementById("taskInput").value;
    const deadline = prompt("Set a deadline (YYYY-MM-DD):");
    const priority = prompt("Set the priority (High, Medium, Low):");
    const labels = prompt("Add labels (comma-separated):");

    if (taskText.trim() !== "") {
        const task = {
            text: taskText,
            deadline: deadline,
            priority: priority,
            labels: labels.split(",").map(label => label.trim())
        };

        tasks.push(task);
        displayTasks();
        document.getElementById("taskInput").value = "";
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the task list

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
            <span>${task.text}</span>
            <span>Deadline: ${task.deadline}</span>
            <span>Priority: ${task.priority}</span>
            <span>Labels: ${task.labels.join(", ")}</span>
            <button onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
