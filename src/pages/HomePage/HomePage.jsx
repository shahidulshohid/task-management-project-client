import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.document.title = "Home page" || "Task Management";
  }, []);
  return <div className="">
    <div className="flex justify-center items-center h-screen">
      <Link to='/login'>Get Start</Link>
    </div>
  </div>;
};

export default HomePage;
