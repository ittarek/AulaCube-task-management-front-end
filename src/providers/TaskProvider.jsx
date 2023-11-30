import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [toDos, setToDos] = useState([]);

  const getToDB = () => {
    let tasks = {};

    const taskCard = localStorage.getItem("tasks-item");
    if (taskCard) {
      tasks = JSON.parse(taskCard);
    }
    return tasks;
  };
  const removeFromDb = data => {
    const tasks = getToDB();
    const updatedTasks = tasks.filter(task => task.id !== data.id);

    localStorage.setItem("tasks-item", JSON.stringify(updatedTasks));

    // Update the state to trigger a re-render and reflect the change in the UI
    setTasks(updatedTasks);
  };

  // Function to add a new task to local storage
  const addToDb = task => {
    setToDos(prev => {
      const existingTasks = Array.isArray(getToDB()) ? getToDB() : [];
      const newTasks = [
        {
          id: Math.random().toString(),
          assign: task.assign,
          status: task.status,
          deadline: task.deadline,
          description: task.description,
          priority: task.priority,
          title: task.title,
          createdAt: new Date(),
        },
        ...existingTasks,
      ];

      setTasks(newTasks);
      localStorage.setItem("tasks-item", JSON.stringify(newTasks));

      return newTasks;
    });
  };

  // Function to update the status of a task in local storage
  const updateStatus = data => {
    const targetIndex = tasks.findIndex(task => task.id === data.id);

    if (targetIndex !== -1) {
      const updatedTasks = [...tasks];
      const target = updatedTasks[targetIndex];

      if (target.status === "pending") {
        target.status = "running";
      } else if (target.status === "running") {
        target.status = "done";
      }

      updatedTasks[targetIndex] = target;
      setTasks(updatedTasks);

      localStorage.setItem("tasks-item", JSON.stringify(updatedTasks));
    } else {
      console.error("Task not found for the given ID:", data.id);
    }
  };

  // Edit The Task
  const handleEditTask = (data,item) => {

    
    const targetIndex = tasks.findIndex(items => items.id === item.id);

    if (targetIndex !== -1) {
      const editedTasks = [...tasks];
      editedTasks[targetIndex] = {
        ...editedTasks[targetIndex],
        assign: data.assign,
        description: data.description,
        priority: data.priority,
      };

      // Update state to trigger a re-render
      setTasks(editedTasks);

      // Update the entire tasks array in localStorage
      localStorage.setItem("tasks-item", JSON.stringify(editedTasks));
    } else {
      console.error("Task not found for the given ID:", data.id);
    }
  };

  useEffect(() => {
    const fetchedTasks = getToDB();
    setTasks(Array.isArray(fetchedTasks) ? fetchedTasks : []);
  }, []);

  const deleteTasks = () => {
    localStorage.removeItem("tasks-item");
  };
  const authInfo = {
    addToDb,
    updateStatus,
    tasks,
    setTasks,
    toDos,
    setToDos,
    deleteTasks,
    getToDB,
    removeFromDb,

    handleEditTask,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
    </div>
  );
};

export default TaskProvider;
