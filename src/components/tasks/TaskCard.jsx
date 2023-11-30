import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
// import { getToDB, updateStatus } from "../utils/database";
import { AuthContext } from "../../providers/TaskProvider";
import { Button } from "@mui/material";
import EditTaskModal from "./EditTaskModal";


const TaskCard = ({ item }) => {
    let [isOpen, setIsOpen] = useState(false);
  const {
    tasks,
    setTasks,
    removeFromDb,
    deleteTasks,
    updateStatus,
    handleEditTask,
  } = useContext(AuthContext);



  //   const updateStatus = data => {
  //     const targetIndex = tasks.findIndex(task => task.id === data.id);
  //     if (targetIndex !== -1) {
  //       const updatedTasks = [...tasks];
  //       const target = updatedTasks[targetIndex];

  //       // Update the status based on the current status
  //       if (target.status === "pending") {
  //         target.status = "running";
  //       } else if (target.status === "running") {
  //         target.status = "done";
  //       } else {
  //         target.status = "archive";
  //       }

  //       // Update the specific task in the array
  //       updatedTasks[targetIndex] = target;

  //       // Update state to trigger a re-render
  //       setTasks(...updatedTasks);

  //       // Update the entire tasks array in localStorage
  //       localStorage.setItem("tasks-item", JSON.stringify(updatedTasks));
  //     } else {
  //       console.error("Task not found for the given ID:", data.id);
  //     }
  //   };

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  
        ${item.priority === "high" ? "text-red-800" : ""}
         ${item.priority === "medium" ? "text-yellow-700" : ""}
          ${item.priority === "low" ? "text-green-500" : ""}`}
      >
        {item?.title}
      </h1>
      <h1>Hello world</h1>
      <p className="mb-3">{item?.description}</p>
      <p className="text-sm">Assigned to - {item?.assign}</p>
      <div className="flex justify-between mt-3">
        <p>{item?.deadline}</p>
        <div className="flex gap-3">
          {/* <Button onClick={() => handleEditTask(item)}>Edit</Button> */}
          <Button variant="outlined" onClick={() => setIsOpen(!isOpen)}>
            edit Task
          </Button>
          <EditTaskModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
          <button title="Delete" onClick={() => removeFromDb(item)}>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>

          <button
            onClick={() => updateStatus(item, tasks, setTasks)}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
