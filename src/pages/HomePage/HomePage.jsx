import { Link } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const {user} = useAuth()
  useEffect(() => {
    window.document.title = "Home page" || "Task Management";
  }, []);
  return <div className="">
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-purple-500">Welcome {user?.displayName}</h1>
      <p className="text-lg text-gray-500 font-semibold">Easily add, update, delete, and view your tasks in one place. Stay organized and boost your productivity!</p>
      </div>
    </div>
  </div>;
};

export default HomePage;
