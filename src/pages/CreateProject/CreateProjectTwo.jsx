const CreateProjectTwo = () => {
  return (
    <div className="my-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-500">Create Task</h3>
      <div className="w-1/2 mx-auto">
        <div className="card w-full shrink-0">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectTwo;
