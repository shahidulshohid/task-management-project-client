import { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { toast } from "react-toastify";

const MyTask = () => {
  const [showAddButton, setShowAddButton] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
 
//  todo section 
  const handleToDoClick = () => {
    setShowAddButton(true);
    setShowInputField(false);
  };
  const handleAddTaskClick = () => {
    setShowInputField(true);
  };

  const handleTaskSubmit = () => {
    if (taskTitle.trim() === "") {
      toast.error("Task title cannot be empty", {
        position: "top-center",
      })
      return;
    }
    console.log(taskTitle);
    setTaskTitle(""); 
    setShowInputField(false); 
  };

  return (
    <div className="my-12 w-11/12 mx-auto">
      <button className="flex items-center bg-purple-600 px-4 py-1 rounded-lg text-white">
        <HiOutlinePlusSm size={20} />
        Add task
      </button>


      <div className="p-4">
      {/* To-Do Section */}
      <div>
        <h2 className="text-xl font-bold cursor-pointer" onClick={handleToDoClick}>
          To-Do
        </h2>

        {/* Add Task Button */}
        {showAddButton && !showInputField && (
          <button 
            onClick={handleAddTaskClick} 
            className="flex items-center mt-2 px-2 py-1 bg-[#4A00FF] text-white rounded"
          >
            <HiOutlinePlusSm size={20} /> Add Task
          </button>
        )}

        {/* Task Input Field */}
        {showInputField && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Write task title..."
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button 
              onClick={handleTaskSubmit} 
              className="flex items-center mt-2 px-2 py-1 bg-[#4A00FF] text-white rounded"
            >
             <HiOutlinePlusSm size={20} /> Add Task
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyTask;
