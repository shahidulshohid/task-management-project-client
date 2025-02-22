import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const { id } = useParams();
  const { data: updateTAsk = {}, refetch } = useQuery({
    queryKey: ["updateTAsk", id],
    queryFn: async () => {
      const res = await axiosPublic(`/tasksOne/${id}`);
      return res.data;
    },
  });
  console.log(updateTAsk);
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const date = new Date().toLocaleString();
    console.log(title, description, category, date);

    const updateTaskInfo = {
      title,
      description,
      category,
      date,
    };
    axiosPublic.patch(`/tasksUpdate/${id}`, updateTaskInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
        navigate('/myTask')
      }
    });
  };
  return (
    <div className="my-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-500">
        Update Task
      </h3>
      <div className="md:w-4/5 lg:w-1/2 mx-auto">
        <div className="card w-full shrink-0">
          <form onSubmit={handleUpdateTask} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={updateTAsk.title}
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <label className="label" htmlFor="role">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={updateTAsk.category}
                  className="border p-3 rounded-md bg-white"
                >
                  <option value="ToDo">To-Do</option>
                  <option value="InProgress">Inprogress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                defaultValue={updateTAsk.description}
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg text-white">
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
