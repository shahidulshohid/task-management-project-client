import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const CreateProject = () => {
  return (
    <div>
        <Link to="/" className="flex items-center gap-2"><FaArrowLeftLong className="mt-1"/>Go Back</Link>
      <div className="w-11/12 mx-auto my-12">
        <h3 className="text-2xl md:text-3xl">New Project</h3>
        <input type="text" name="" id="" />
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Project Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <Link to="/createProjectTwo"><button className="text-xl mt-3 px-4 py-2 bg-[#4A00FF] rounded-lg text-white">Continue</button></Link>
      </div>
    </div>
  );
};

export default CreateProject;
