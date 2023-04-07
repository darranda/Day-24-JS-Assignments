/* Create an IIFE named taskManager that contains the following functionality: A private variable named tasks to store task descriptions. It should be initialized as an empty array.*/

let taskManager = (function (){
    let tasks = [];

// A addTask function that takes a task description as an argument and adds it to the tasks array.

function addTask (taskDescription) {
    tasks.push(taskDescription);
    
}

// A displayTasks function that logs all tasks in the tasks array to the console.
function displayTasks () {
    console.log (tasks);
}

// The IIFE should return an object with the addTask and displayTasks functions.
  return {
    addTask,
    displayTasks
  };

})();

    taskManager.addTask ('take out trash');
    taskManager.addTask ('wash dishes');
    taskManager.addTask ('complete CTAC assignments');

    taskManager.displayTasks ('');