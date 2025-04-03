
const Workbench2 = () => {
  const filterTasks = (status) => {
    console.log(`Filtering tasks by status: ${status}`);
  };

  const tasks = [
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
    },
    {
      task: "Create proposal for Smiths Hospital",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Completed",
    },
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
    },
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
    },
    {
      task: "Send proposal to Smith Hospitals",
      assignedTo: "Temitope Ajayi",
      date: "26/10/2022",
      source: "Customer Service",
      status: "Pending",
    },
  ];

  return (
    <div className="relative w-[1140px] mx-auto p-8 bg-slate-100 border border-[#EDF2F6] shadow-lg rounded-[5px]">
      <div className="text-[#353535] ml-8 mb-10 font-[Product Sans] font-bold text-[30px] leading-[23px]">
        Workbench
      </div>

      {/* Navigation Buttons and Create Activity Link Section */}
      <div className="flex justify-start mb- ml-8 gap-[260px]">
        <div className="flex justify-start">
          <button
            className="px-20 py-4 mr-2 text-white bg-red-600 rounded hover:bg-white hover:text-red-600 font-semibold"
            onClick={() => filterTasks("all")}
          >
            All
          </button>
          <button
            className="px-16 py-4 mr-2 text-white bg-red-600 rounded hover:bg-white hover:text-red-600 font-semibold"
            onClick={() => filterTasks("pending")}
          >
            Pending
          </button>
          <button
            className="px-14 py-4 text-white bg-red-600 rounded hover:bg-white hover:text-red-600 font-semibold"
            onClick={() => filterTasks("completed")}
          >
            Completed
          </button>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path
              d="M18.75 7.5003H3.925l4.5375-5.45a1.2516 1.2516 0 0 0-1.925-1.6l-6.25 7.5a1.5 1.5 0 0 0-.1125.1875c0 .0625 0 .1-.0875.1625a1.25 1.25 0 0 0-.0875.45 1.25 1.25 0 0 0 .0875.45c0 .0625 0 .1.0875.1625q.0494.098.1125.1875l6.25 7.5a1.25 1.25 0 0 0 .9625.45 1.2496 1.2496 0 0 0 1.1959-1.6208 1.25 1.25 0 0 0-.2334-.4292l-4.5375-5.45H18.75a1.25 1.25 0 1 0 0-2.5"
              fill="#C61531"
            />
          </svg>
          <a
            href="#"
            className="text-[#C61531] text-[19px] font-[Product Sans] font-bold hover:underline"
          >
            Create Activity
          </a>
        </div>
      </div>

      {/* Task Table */}
      <div className="relative w-[95%] mx-auto p-8 bg-white border border-[#EDF2F6] shadow-lg rounded-[5px]">
        <div className="grid grid-cols-6 items-center mb-6 mt-10 text-center">
          {["Task", "Assigned to", "Date", "Source", "Status", "Action"].map(
            (heading, idx) => (
              <div
                key={idx}
                className="text-[#1F4173] font-bold text-[12px] leading-[14px] font-[Product Sans]"
              >
                {heading}
              </div>
            )
          )}
        </div>

        {/* Task Rows */}
        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="grid grid-cols-6 items-center text-center text-[#353535] text-[12px] leading-[14px] font-[Product Sans]"
            >
              <div>{task.task}</div>
              <div>{task.assignedTo}</div>
              <div>{task.date}</div>
              <div>{task.source}</div>
              <div
                className={
                  task.status === "Pending"
                    ? "text-[#FFCD28]"
                    : "text-[#82C659]"
                }
              >
                {task.status}
              </div>
              <div>
               ...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workbench2;
