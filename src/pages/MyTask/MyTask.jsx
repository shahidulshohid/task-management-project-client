import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCorners,
} from "@dnd-kit/core";

const TaskItem = ({ task, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
    data: { task },
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-4 bg-white shadow-lg rounded-lg my-4 hover:shadow-2xl transition duration-300 ease-in-out cursor-grab"
    >
      <h3 className="text-2xl font-semibold text-blue-600">{task.title}</h3>
      <p className="text-gray-600 text-lg font-semibold my-2">
        {task.description}
      </p>
      <p className="text-gray-600 text-lg font-semibold">
        {new Date(task.date).toLocaleDateString()}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <p
          className={`${
            task.category === "ToDo"
              ? "bg-gray-500"
              : task.category === "InProgress"
              ? "bg-orange-300"
              : "bg-green-500"
          } rounded-lg text-lg px-4 py-1 text-white`}
        >
          {task.category}
        </p>
        <div className="flex items-center gap-5 justify-center">
          <Link to={`/updateTask/${task._id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
              <FaRegEdit size={20} />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(task._id)}
            className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
          >
            <MdOutlineDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const TaskColumn = ({ title, category, tasks, setTasks, handleDelete }) => {
  const { setNodeRef } = useDroppable({ id: category });

  return (
    <div
      ref={setNodeRef}
      className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 p-4 min-h-[300px]"
    >
      <h2>{title}</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <p className="text-gray-500 text-2xl mt-2">No tasks found</p>
      )}
    </div>
  );
};

const MyTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [tasks, setTasks] = useState([]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) setTasks(data);
  }, [data]);

  useEffect(() => {
    window.document.title = "My Task page" || "Task Management";
  }, []);

  const handleDelete = async (taskId) => {
    cons
    try {
      // Confirm the deletion
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        // Make API call to delete the task
        await axiosPublic.delete(`/tasks/${taskId}`);
        
        // Remove the deleted task from the local state
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

        // Show success message
        Swal.fire("Deleted!", "The task has been deleted.", "success");
      }
    } catch (error) {
      // Handle error
      Swal.fire("Error!", "Something went wrong. Please try again.", "error");
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over) return;

    const draggedTaskId = active.id;
    const newCategory = over.id;

    const updatedTasks = tasks.map((task) =>
      task._id === draggedTaskId ? { ...task, category: newCategory } : task
    );
    setTasks(updatedTasks);

    // Update task category in the database
    await axiosPublic.patch(`/tasks/${draggedTaskId}`, {
      category: newCategory,
    });
    refetch();
  };

  if (isLoading) return <LoadingPage />;

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="my-12">
        <h1 className="text-2xl md:text-3xl text-center mb-5 font-semibold text-purple-500">
          My Task
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <TaskColumn
            title="To-Do"
            category="ToDo"
            tasks={tasks.filter((task) => task.category === "ToDo")}
            setTasks={setTasks}
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="In Progress"
            category="InProgress"
            tasks={tasks.filter((task) => task.category === "InProgress")}
            setTasks={setTasks}
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Done"
            category="Done"
            tasks={tasks.filter((task) => task.category === "Done")}
            setTasks={setTasks}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </DndContext>
  );
};

export default MyTask;
