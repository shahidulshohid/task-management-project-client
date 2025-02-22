
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";

const MyTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // Fetch tasks
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });

  
  useEffect(() => {
    window.document.title = "My Task page" || "Task Management";
  }, []);

  // Filter tasks into categories
  const toDoTasks = tasks.filter((task) => task.category === "ToDo");
  const inProgressTasks = tasks.filter(
    (task) => task.category === "InProgress"
  );
  const doneTasks = tasks.filter((task) => task.category === "Done");

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) return <LoadingPage></LoadingPage>;
  return (
    <div className="my-12">
      <h1 className="text-2xl md:text-3xl text-center mb-5 font-semibold text-purple-500">
        My Task
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {/* To-Do Column */}
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 p-4">
          <h2>To-Do</h2>
          {toDoTasks.length > 0 ? (
            toDoTasks.map((task) => (
              <div
                key={task._id}
                className="p-4 bg-white shadow-lg rounded-lg my-4 hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-blue-600">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-lg font-semibold my-2">
                  {task.description}
                </p>
                <p className="text-gray-600 text-sm font-semibold my-2">
                  {task.category}
                </p>
                <p className="text-gray-400 text-sm font-semibold">
                  {new Date(task.date).toLocaleDateString()}
                </p>
                <div className="mt-4 flex items-center gap-5 justify-center">
                  <Link to={`/updateTask/${task._id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                      <FaRegEdit size={20} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    <MdOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-2xl mt-2">No tasks found</p>
          )}
        </div>

        {/* In Progress Column */}
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 p-4">
          <h2>In Progress</h2>
          {inProgressTasks.length > 0 ? (
            inProgressTasks.map((task) => (
              <div
                key={task._id}
                className="p-4 bg-white shadow-lg rounded-lg my-4 hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-blue-600">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-lg font-semibold my-2">
                  {task.description}
                </p>
                <p className="text-gray-600 text-sm font-semibold my-2">
                  {task.category}
                </p>
                <p className="text-gray-400 text-sm font-semibold">
                  {new Date(task.date).toLocaleDateString()}
                </p>
                <div className="mt-4 flex items-center gap-5 justify-center">
                  <Link to={`/updateTask/${task._id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                      <FaRegEdit size={20} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    <MdOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-2xl mt-2">No tasks found</p>
          )}
        </div>

        {/* Done Column */}
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 p-4">
          <h2>Done</h2>
          {doneTasks.length > 0 ? (
            doneTasks.map((task) => (
              <div
                key={task._id}
                className="p-4 bg-white shadow-lg rounded-lg my-4 hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-blue-600">
                  {task.title}
                </h3>
                <p className="text-gray-600 text-lg font-semibold my-2">
                  {task.description}
                </p>
                <p className="text-gray-600 text-sm font-semibold my-2">
                  {task.category}
                </p>
                <p className="text-gray-400 text-sm font-semibold">
                  {new Date(task.date).toLocaleDateString()}
                </p>
                <div className="mt-4 flex items-center gap-5 justify-center">
                  <Link to={`/updateTask/${task._id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                      <FaRegEdit size={20} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    <MdOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-2xl mt-2">No tasks found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTask;





