import { useEffect } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const { signInWithGoogle, createUser, updateUserProfile, setUser } =
    useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.document.title = "Sign Up page" || "Task Management";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Length must be at least 6 character", {
        position: "top-center",
      });
      return;
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!regex.test(password)) {
      toast.error(
        "Must have a Uppercase and Lowercase letter in the password  ",
        {
          position: "top-center",
        }
      );
      return;
    }

    createUser(email, password).then((res) => {
      updateUserProfile(name, photo).then(() => {
        //create user entry in the data
        setUser({ displayName: name, photoURL: photo, email: email });
      });

      const userInfo = {
        name: name,
        email: email,
        photo: photo,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        Swal.fire({
          title: "Sign Up Successfully!",
          text: "Task has been deleted.",
          icon: "success",
        });
        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      });
    });
  };

  // google signup
  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      const userInfo = {
        userId: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        Swal.fire({
          title: "Sign Up Successfully!",
          text: "Task has been deleted.",
          icon: "success",
        });
        if (location.state) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      });
    });
  };
  return (
    <div className="md:w-4/5 lg:w-1/2 mx-auto my-12">
      <h2 className="text-2xl md:text-4xl font-bold text-purple-500 text-center">
        Create Your Account
      </h2>
      <div className="lg:px-7 md:px-8 px-10">
        <div className="form-control mt-5">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-primary text-lg text-white"
          >
            <FaGoogle /> Google
          </button>
        </div>
      </div>
      <div className="card w-full  shrink-0">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
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
          <p className="text-center font-semibold">
            All ready Have Your Account ?{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
