import { Link } from "react-router-dom";
import { HiOutlinePlusSm } from "react-icons/hi";

const HomePage = () => {
  return (
    <div className=" my-12">
      <div className="flex justify-between gap-5">
        <div className=" bg-[#E0DEDC] w-1/2 h-[500px] p-5 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold">My Task</h2>
        </div>
        <div className=" bg-[#E0DEDC] w-1/2 h-[500px] p-5 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold">Projects</h2>
            <Link>
            <div className="flex gap-2">
                <p className="w-14 h-14 rounded-full border-2"><HiOutlinePlusSm /></p>
                <p>Create Project</p>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
