import { useLocation } from "react-router-dom";

const ViewFile = () => {
  const location = useLocation();
  const file = location.state?.file;

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        {file ? (
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-4">Uploaded File:</h2>
            <embed
              src={URL.createObjectURL(file)}
              type="application/pdf"
              className="w-full h-[650px] border"
            />
          </div>
        ) : (
          <p className="text-gray-500">No file uploaded to view.</p>
        )}
      </div>
    </div>
  );
};

export default ViewFile;
