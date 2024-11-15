const ManagePA = () => {


  return (
    <div className="bg-lightblue p-6 min-h-screen flex flex-col ml-5">
      <h3 className="ml-6 text-xl font-semibold text-gray-800">
        You Have Approved the PA Request
      </h3>

      <div className="bg-white w-[1179px] h-[761px] p-8 mt-4 rounded-lg shadow-md flex flex-col justify-between">
        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center flex-grow">
          <div className="bg-white w-[539.34px] h-[306.47px] p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Successfully generated PA code
            </h4>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ManagePA;
