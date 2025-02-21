

const MyTask = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">To-Do</div>
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">In Progress</div>
        <div className="text-center text-2xl md:text-3xl font-semibold bg-gray-200 max-h-screen">Done</div>
      </div>
    </div>
  );
};

export default MyTask;