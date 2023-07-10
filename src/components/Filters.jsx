import React from "react";

function Filters() {
  return (
    <div>
      <div className="flex justify-center items-center h-[80vh] w-[20rem] border rounded-3xl border-red-700 mt-5">
        <div className="flex">
          <select className="bg-gray-50 border border-red-700 text-gray-900 text-sm rounded-lg">
            <option selected>Choose a year</option>
          </select>
          <button className="text-white bg-green-700 hover:bg-green-800 border rounded-3xl font-bold  text-sm px-5 py-2.5 text-center items-center">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
