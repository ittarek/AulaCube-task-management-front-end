import React from "react";

// import { useSelector } from "react-redux";
import MyModal from './../UI/MyModal';

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
//   const { task } = useSelector(state => state.taskSlice);
// TO DO
const task = [
  {
    id: 1,
    name: "tarek",
  },
  {
    id: 2,
    name: "tarek",
  },
];
  const detailTask = task.find(item => item.id === id);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <MyModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={closeModal}
      title={detailTask?.title}
    >
      {detailTask?.description}
    </MyModal>
  );
};

export default TaskDetailsModal;
