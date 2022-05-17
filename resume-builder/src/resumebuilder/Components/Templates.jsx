import React from "react";
import { Link } from "react-router-dom";

function Templates() {
  return (
    <React.Fragment>
      <div className="px-4 py-4 min-h-screen bg-slate-50 overflow-auto">
        <div className="flex flex-col truncate bg-white rounded-3xl pt-4">
          <p className="text-xl pl-4 py-4 font-medium text-blue-700">
            Select the Best Template
          </p>
          <hr className={"bg-slate-100 my-[4pt]"} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center m-8">
            <div className=" max-w-sm">
              <div className="flex flex-col justify-center items-center hover:shadow-xl  transition-all duration-500">
                <img
                  src={process.env.PUBLIC_URL + `/template1.png`}
                  alt="template1"
                />
                <Link
                  className="text-center my-4 w-[95%] bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                  to="/template/1"
                >
                  Edit
                </Link>
              </div>
            </div>
            <div className=" max-w-sm">
              <div className="flex flex-col justify-center items-center hover:shadow-xl  transition-all duration-500">
                <img
                  src={process.env.PUBLIC_URL + `/template2.png`}
                  alt="template2"
                />
                <Link
                  className="text-center my-4 w-[95%] bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                  to="/template/2"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Templates;
