


  // use local storage to manage cart data


// // Function to add a new task to local storage
// const addToDb = (task, toDos, setToDos) => {
//   setToDos((prev) => {
//     // Retrieve existing tasks from local storage
//     const existingTasks = Array.isArray(getToDB()) ? getToDB() : [];

//     // Add the new task to the array
//     const newTasks = [
//       {
//         id: Math.random().toString(),
//         assign: task.assign,
//         status: task.status,
//         deadline: task.deadline,
//         description: task.description,
//         priority: task.priority,
//         title: task.title,
//         createdAt: new Date(),
//       },
//       ...existingTasks, // Include existing tasks
//     ];

//     // Update state to trigger a re-render
//     setToDos(newTasks);

//     // Update the entire tasks array in localStorage
//     localStorage.setItem("tasks-item", JSON.stringify(newTasks));

//     return newTasks;
//   });
// };

// // Function to update the status of a task in local storage
// const updateStatus = (data, tasks, setTasks) => {
//   const targetIndex = tasks?.findIndex((task) => task.id === data.id);

//   if (targetIndex !== -1) {
//     const updatedTasks = [...tasks];
//     const target = updatedTasks[targetIndex];

//     // Update the status based on the current status
//     if (target?.status === "pending") {
//       target.status = "running";
//     } else if(target?.status === "running") {
//       target.status = "done";
//     } else {
//       // target.status = "archive";
//     }

//     // Update the specific task in the array
//     updatedTasks[targetIndex] = target;

//     // Update state to trigger a re-render
//     setTasks(updatedTasks);

//     // Update the entire tasks array in localStorage
//     localStorage.setItem("tasks-item", JSON.stringify(updatedTasks));
//   } else {
//     console.error("Task not found for the given ID:", data.id);
//   }
// };









  

// export { addToDb,updateStatus, removeFromDb, getToDB, deleteTasks };