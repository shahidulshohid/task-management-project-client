import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyTask = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks, isLoading, refetch} = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic("/tasks");
      return res.data;
    },
  });
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic("/users");
      return res.data;
    },
  });
console.log('============',users)
console.log('=================',tasks)
  useEffect(() => {
    const toDoTasks = tasks?.filter((task) => task.category === "toDo");
    const inProgressTasks = tasks?.filter((task) => task.category === "inProgress");
    const doneTasks = tasks?.filter((task) => task.category === "done");
    refetch();
  }, []);

  if (isLoading) return <p className="text-center text-xl">Loading tasks...</p>;

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">
          <h2>To-Do</h2>
          {
            users?.userId && tasks?.map(item => (
              <div key={item._id}>
                <p>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">
          In Progress
        </div>
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">
          Done
        </div>
      </div>
    </div>
  );
};

export default MyTask;
