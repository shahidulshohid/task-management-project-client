import { FaGoogle } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect } from "react";
const LoginPage = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useAuth();
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const userInfo = {
        userId: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      });
    });
  };
  useEffect(() => {
    window.document.title = "Login page" || "Task Management";
  }, []);
  return (
    <div className="md:w-4/5 lg:w-1/2 mx-auto my-12">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-500 text-center">Login Your Account</h2>
      <div className="card w-full  shrink-0">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-lg text-white">
              Login
            </button>
          </div>
          <div className="lg:px-7 md:px-8 px-10">
            <div className="form-control mt-2">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary text-lg text-white"
              >
                <FaGoogle /> Google
              </button>
            </div>
          </div>
          <p className="text-center font-semibold">
            Don't Have Your Account ?{" "}
            <Link className="text-red-500" to="/signUp">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
