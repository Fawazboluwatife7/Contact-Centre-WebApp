import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FileUpload = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUploadClick = () => {
    document.getElementById("dropzone-file").click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      setShowModal(true); // Show the success modal after the upload button is clicked
    } else {
      alert("Please select a file before uploading!");
    }
  };

  const handleViewFile = () => {
    if (file) {
      // Navigate to the view page and pass the file details
      navigate("/view-file", { state: { file } });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-3/5 flex flex-col h-[70svh] bg-white rounded-lg">
        {/* Dropzone */}
        <div
          onClick={handleFileUploadClick}
          className="flex flex-col items-center justify-center ml-64 w-2/4 mt-32 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <svg
              className="w-8 h-8 mb-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="text-sm text-gray-500">
              Select a file or drag and drop here
            </p>
            <p className="text-xs text-gray-400 mb-4">
              JPG, PNG or PDF, file size no more than 10MB
            </p>
            {/* Select File Button */}
            <button
              onClick={handleFileUploadClick}
              className="px-4 py-2 text-sm font-normal text-blue-400 hover:bg-blue-500 hover:text-white rounded-md border border-blue-400"
            >
              Select File
            </button>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="border bg-slate-50 h-20 mt-28">
          {/* Buttons */}
          <div className="flex gap-2 justify-end mt-5 pr-7">
            <button
              onClick={onClose}
              className="px-8 py-3 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              className="px-8 py-3 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Success!</h2>
            <p className="text-sm text-gray-500 mb-6">
              Your file has been uploaded successfully.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
              <button
                onClick={handleViewFile}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  onClose: PropTypes.func.isRequired, // Prop to handle closing the component
};

export default FileUpload;
