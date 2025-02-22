import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
//   const noHeaderFooter = location.pathname.includes("/");
  return (
    <div>
      {/* {noHeaderFooter || <Navbar></Navbar>} */}
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
