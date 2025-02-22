import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaTasks } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { TbHomeStar } from "react-icons/tb";
import { RiLogoutCircleLine } from "react-icons/ri";
import taskLogo from "../../assets/taskLogo.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate()
  const { logOut, user } = useAuth();
  const handleLogout = () => {
    logOut().then((result) => {
      Swal.fire({
        title: "Logout Successfully!",
        text: "Task has been deleted.",
        icon: "success",
      });
      navigate('/')
    });
  };
  return (
    <div className="w-11/12 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="px-2">
                <NavLink to="/">
                  <TbHomeStar />
                  Home
                </NavLink>
              </li>
              <li className="px-2 text-lg font-semibold">
                <NavLink to="/addTAsk">
                  <IoMdAdd />
                  Add Task
                </NavLink>
              </li>
              <li className="px-2 text-lg font-semibold">
                <NavLink to="/myTask">
                  <FaTasks />
                  My Task
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center rounded-full">
            <div>
              <img
                className="w-10 h-10 md:w-12 md:h-12"
                src={taskLogo}
                alt=""
              />
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-xl md:text-3xl hidden lg:flex"
            >
              Task Management
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="px-2 text-lg font-semibold">
              <NavLink to="/">
                <TbHomeStar />
                Home
              </NavLink>
            </li>
            <li className="px-2 text-lg font-semibold">
              <NavLink to="/addTAsk">
                <IoMdAdd size={20} />
                Add Task
              </NavLink>
            </li>
            <li className="px-2 text-lg font-semibold">
              <NavLink to="/myTask">
                <FaTasks />
                My Task
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <img className="w-10 h-10 rounded-full mr-2" src={user?.photoURL} alt="" />
          </div>
          <button
            onClick={handleLogout}
            className="bg-[#4A00FF] px-4 py-2 rounded-lg text-white text-lg flex items-center gap-2"
          >
            <RiLogoutCircleLine className="mt-1" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
