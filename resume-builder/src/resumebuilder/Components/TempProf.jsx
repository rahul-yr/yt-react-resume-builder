import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Template1 from "./Template1";
import ReactToPrint from "react-to-print";

function TempProf() {
  const userstate = useSelector((state) => state.user);
  const printRef = useRef();

  return (
    <React.Fragment>
      <div className="flex flex-col bg-slate-100">
        <div className="flex flex-row justify-end pt-2  pr-8">
          <ReactToPrint
            content={() => printRef.current}
            trigger={() => (
              <button className=" bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Print/Download
              </button>
            )}
          />
        </div>
        {/* de; */}
        <div className="flex flex-row justify-center mt-2">
          <div className="text-[8px] sm:text-[16px] lg:max-w-2xl">
            <Template1 state={userstate} />
          </div>
        </div>
      </div>

      <div className="hidden">
        <div className="text-[16px] bg-slate-100 h-screen p-4 " ref={printRef}>
          <Template1 state={userstate} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default TempProf;
