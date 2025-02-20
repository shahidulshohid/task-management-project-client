import { FaGoogle } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
const LoginPage = () => {
  return (
    <div className="md:w-4/5 lg:w-1/2 mx-auto">
      <div className="card w-full  shrink-0">
        <form className="card-body">
          <div className="space-y-4">
            <div className="form-control mt-6">
              <button className="btn text-lg text-primary bg-white border-2 hover:btn-primary hover:text-white">
              <FaGoogle /> Google
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-lg text-primary bg-white border-2 hover:btn-primary hover:text-white">
              <FiGithub /> GitHub
              </button>
            </div>
          </div>
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
