import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logOut } = useAuth();
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
              {/* <li className="px-2">
                <NavLink to="/">Home</NavLink>
              </li> */}
              <li className="px-2 text-lg font-semibold">
                <NavLink to="/addTAsk">Add Task</NavLink>
              </li>
              <li className="px-2 text-lg font-semibold">
                <NavLink to="/myTask">My Task</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl md:text-3xl">
            Task Management
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li className="px-2 text-lg font-semibold">
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li className="px-2 text-lg font-semibold">
              <NavLink to="/addTAsk">Add Task</NavLink>
            </li>
            <li className="px-2 text-lg font-semibold">
              <NavLink to="/myTask">My Task</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={logOut}
            className="bg-[#4A00FF] px-4 py-2 rounded-lg text-white text-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
