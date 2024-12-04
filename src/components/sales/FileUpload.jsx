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
      navigate("/SalesDashboard/view-file", { state: { file } });
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
        // Modal Background
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"> 
          {/* Modal Container*/}
          <div className="relative w-full max-w-[684px] h-auto bg-white rounded-[5px] p-8 mx-4"> 
            {/* Title */}
            <div className="flex w-full text-center font-semibold text-[24px] md:text-[30px] md:w-[46%] md:ml-44 leading-[30px] md:leading-[35px] text-black mb-6"> 
            Proposal Uploaded successfully
            </div>
            <svg className="flex ml-16 sm:ml-64" width="122" height="122" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 122 122" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" fill="#13132A" d="M5.971 39.673c-.187 0-.377-.035-.561-.114L.902 37.685a1.461 1.461 0 0 1 1.12-2.699l4.51 1.878c.746.31 1.1 1.163.787 1.909-.23.561-.775.9-1.348.9"/><path id="b" fill="#13132A" d="M61.003 103.672c23.568 0 42.674-19.109 42.674-42.677s-19.106-42.67-42.674-42.67S18.33 37.427 18.33 60.994c0 23.568 19.107 42.677 42.674 42.677"/><path id="c" fill="#00DD9D" d="M56.598 80.09 41.979 63.389a5.85 5.85 0 0 1 .553-8.254 5.847 5.847 0 0 1 8.253.553l5.848 6.686L74.157 42.51a5.848 5.848 0 1 1 8.771 7.739z"/></defs><use href="#a" opacity=".03"/><use href="#b"/><use href="#c"/><path fill="#13132A" d="M85.662 121.999c-.57 0-1.117-.34-1.35-.901l-1.878-4.511a1.467 1.467 0 0 1 .79-1.912 1.47 1.47 0 0 1 1.912.789l1.877 4.511a1.47 1.47 0 0 1-.79 1.915 1.5 1.5 0 0 1-.561.109"/><path fill="#13132A" d="M100.921 102.383c-.375 0-.749-.143-1.035-.427l-3.023-3.026a1.463 1.463 0 0 1 0-2.067 1.463 1.463 0 0 1 2.067 0l3.026 3.023c.57.573.57 1.497 0 2.07a1.47 1.47 0 0 1-1.035.427" opacity=".667"/><path fill="#13132A" d="M120.535 87.125c-.187 0-.377-.038-.561-.111l-4.511-1.877a1.465 1.465 0 0 1-.79-1.912 1.477 1.477 0 0 1 1.915-.79l4.512 1.877a1.467 1.467 0 0 1 .789 1.913c-.234.56-.784.9-1.354.9"/><path fill="#13132A" d="M117.454 62.46h-4.269a1.462 1.462 0 0 1 0-2.923h4.269a1.462 1.462 0 0 1 0 2.924" opacity=".667"/><path fill="#13132A" d="M116.027 39.676c-.57 0-1.12-.339-1.354-.9a1.47 1.47 0 0 1 .79-1.915l4.511-1.877a1.475 1.475 0 0 1 1.915.795c.307.742-.044 1.6-.789 1.909l-4.512 1.877a1.5 1.5 0 0 1-.561.111" opacity=".5"/><path fill="#13132A" d="M97.898 25.566a1.463 1.463 0 0 1-1.035-2.497l3.026-3.023a1.46 1.46 0 0 1 2.067 0c.57.57.57 1.497 0 2.067l-3.023 3.023c-.287.284-.661.43-1.035.43M83.788 7.434a1.463 1.463 0 0 1-1.35-2.023L84.313.902a1.457 1.457 0 0 1 1.912-.789 1.464 1.464 0 0 1 .79 1.91l-1.877 4.51c-.234.562-.78.901-1.351.901M61 10.273a1.46 1.46 0 0 1-1.46-1.462V4.542a1.462 1.462 0 0 1 2.923 0v4.269c0 .807-.655 1.462-1.462 1.462"/><path fill="#13132A" d="M38.21 7.434c-.572 0-1.116-.34-1.347-.9l-1.877-4.512A1.462 1.462 0 0 1 37.688.9l1.87 4.512a1.456 1.456 0 0 1-.786 1.909 1.4 1.4 0 0 1-.561.114" opacity=".667"/><path fill="#13132A" d="M24.101 25.566c-.374 0-.748-.146-1.035-.43l-3.02-3.023a1.46 1.46 0 0 1 0-2.066 1.457 1.457 0 0 1 2.067 0l3.023 3.023a1.463 1.463 0 0 1-1.035 2.496"/><use href="#a" opacity=".515"/><path fill="#13132A" d="M8.816 62.46H4.548a1.462 1.462 0 0 1 0-2.923h4.268a1.462 1.462 0 0 1 0 2.924"/><path fill="#13132A" d="M1.463 87.125a1.465 1.465 0 0 1-.561-2.815l4.511-1.878c.74-.301 1.6.05 1.91.792a1.463 1.463 0 0 1-.79 1.912l-4.508 1.877a1.5 1.5 0 0 1-.562.111" opacity=".5"/><path fill="#13132A" d="M21.081 102.383c-.374 0-.748-.143-1.035-.427a1.466 1.466 0 0 1 0-2.07l3.023-3.023a1.463 1.463 0 0 1 2.067 2.067l-3.02 3.026c-.287.284-.66.427-1.035.427"/><path fill="#13132A" d="M35.334 118.098c-.374 0-.749-.143-1.035-.427a1.466 1.466 0 0 1 0-2.07l3.023-3.023c.57-.57 1.497-.57 2.067 0a1.457 1.457 0 0 1 0 2.067l-3.02 3.026c-.287.284-.66.427-1.035.427" opacity=".667"/><use href="#b"/><use href="#c"/></svg> 
        
            <button
            onClick={handleViewFile} 
              className="md:w-[196px] w-[70%]  h-[53px] bg-[#C61531] rounded-[5px] flex items-center justify-center font-bold text-[18px] text-white md:ml-52 ml-10 mt-7"> 
              View
            </button>
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
