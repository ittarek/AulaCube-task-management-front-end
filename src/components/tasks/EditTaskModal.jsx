import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/fetures/task/taskSlice";
import MyModal from "../UI/MyModal";
// import { addToDb } from "../utils/database";
import { AuthContext } from "../../providers/TaskProvider";
import { TextField } from "@mui/material";

const EditTaskModal = ({ isOpen, setIsOpen, item }) => {
  const { toDos, setToDos, addToDb, handleEditTask } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const cancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = data => {
    //  let  id =  Math.random().toString();
    handleEditTask(data,item );

 

    reset();
    cancel();
  };
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="program">
      <form onSubmit={handleSubmit(onSubmit)}>
      

        {/* description */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          type="text"
          id="description"
          autoComplete="description"
          {...register("description", { required: true })}
        />
     

    
     
        {/* Assign to */}
        <div className="flex flex-col">
          <TextField
            margin="normal"
            required
            fullWidth
            name="assign"
            label="Assign To"
            type="text"
            // id="assignTo"
            // autoComplete="assignTo"
            {...register("assign", { required: true })}
          />
        </div>

        {/* priority */}
        <div className="flex flex-col ">
          <label htmlFor="priority" className="label">
            <span className="label-text">Priority</span>
          </label>
          <select name="high" id="priority" {...register("priority")}>
            <option defaultValue="high">High</option>
            <option value="medium">Medium</option>

            <option value="low">Low</option>
          </select>
        </div>

        {/* buttons */}
        <div className="flex gap-3 ">
          <div className=" mt-6">
            <button
              onClick={() => cancel()}
              type="button"
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </form>
    </MyModal>
  );
};

export default EditTaskModal;
