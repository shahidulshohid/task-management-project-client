
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddTask = () => {
    const axiosPublic = useAxiosPublic()
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        console.log(title, description, category)
    
        const addTaskInfo = {
          title,
          description,
          category
        };
        // send data to database 
        axiosPublic.post('/addTask', addTaskInfo)
        .then(res => {
            if(res.data.insertedId){
                toast.success('Task Added successfully', {
                    position: "top-center"
                })
            }
        })
      };
  return (
    <div className="my-12">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-500">
        Add Task
      </h3>
      <div className="md:w-4/5 lg:w-1/2 mx-auto">
        <div className="card w-full shrink-0">
          <form onSubmit={handleAddTask} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
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
                <select name="category" className="border p-3 rounded-md bg-white">
                  <option value="ToDo">To-Do</option>
                  <option value="InProgress">Inprogress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg text-white">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask
