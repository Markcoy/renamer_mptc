import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cavitex() {
  const [file, setFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getNewFileName = () => {
    if (file && selectedDate) {
      const formattedDate = formatDate(selectedDate);
      return `CAVITEX_${formattedDate}.xlsx`;
    }
    return null;
  };

  const handleDownload = () => {
    if (file) {
      const newFileName = getNewFileName();

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const blob = new Blob([data], { type: "application/octet-stream" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = newFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success notification
        toast.success("File downloaded successfully!");
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div
      className="mt-[100px] max-w-[900px] mx-auto h-auto bg-white border border-blue-700 flex flex-col items-center justify-center relative p-6 rounded-lg"
      id="nlex"
    >
      <h1 className="absolute text-2xl top-0 left-0 p-6 text-red-700">
        CAVITEX
      </h1>

      <input
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
        className="mb-4 mt-10 border border-gray-300 text-gray-500 rounded-lg p-2 w-full cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-start w-full">
        <input
          type="date"
          onChange={handleDateChange}
          className="mb-4 text-gray-900 border border-gray-300 rounded-lg p-3 w-[160px] text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none hover:bg-gray-100"
        />
      </div>

      {file && selectedDate && (
        <>
          <p>
            New file name:{" "}
            <p className="text-green-700 text-xl">{getNewFileName()}</p>
          </p>
          <button
            onClick={handleDownload}
            className="mt-8 px-5 py-3 bg-red-500 text-white rounded-lg font-semibold text-md transition-all duration-200 ease-in-out transform hover:bg-red-600 focus:ring-4 focus:ring-blue-300 focus:outline-none active:scale-95"
          >
            Download Renamed File
          </button>
        </>
      )}

      {/* Toast container to show notifications */}
      <ToastContainer />
    </div>
  );
}

export default Cavitex;
