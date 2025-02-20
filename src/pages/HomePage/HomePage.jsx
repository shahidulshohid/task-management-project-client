import { Link } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className="my-12">
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-purple-500 text-center mb-5">WelCome Shahidul Islam</h1>
        </div>
      <div className="md:flex justify-between gap-5">
        <div className="bg-white md:w-1/2 h-[500px] p-5 rounded-xl border-2 border-dotted border-pink-600">
            <h2 className="text-xl md:text-2xl font-bold">My Task</h2>
        </div>
        <div className=" bg-white md:w-1/2 h-[500px] p-5 rounded-xl border-2 border-dotted border-pink-600">
            <h2 className="text-xl md:text-2xl font-bold">Projects</h2>
            <Link to='/createProject'>
            <div className="flex items-center gap-3 mt-3">
                <p className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-dotted border-pink-600"><HiOutlinePlusSm size={35}/></p>
                <p className="text-lg font-semibold">Create Project</p>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
