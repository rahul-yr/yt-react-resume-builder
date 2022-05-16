import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Template1 from "../ResumeTemplates/Template1";

function SampleResume() {
  const printRef = useRef();
  const configs = {
    // common
    titleFontSize: " text-[16pt] ",
    boldTextSize: " text-[14pt] ",
    primaryTextSize: " text-[12pt] ",
    infoTextSize: " text-[10pt] ",
    fontFamily: " font-sans ",
    pageBackgroundColor: " bg-slate-100 ",
    blockBackgroundColor: " bg-white ",
    primaryFontColor: " text-black ",
    headingFontColor: " text-blue-700 ",
    // rating
    ratingBarColor: " bg-gray-200 ",
    ratingBarFillColor: " bg-yellow-400 ",
    ratingBarHeight: " h-[4pt] ",
    // link underline color
    linkUnderlineColor: " decoration-slate-300 ",
  };

  const handleCalculations = () => {
    console.log(printRef.current.clientWidth, printRef.current.clientHeight);
    console.log(printRef.current.scrollHeight);
  };

  return (
    <React.Fragment>
      {/* button position adjuster */}
      <div className="flex flex-row justify-start p-4 bg-slate-50">
        <div className="md:w-1/4"></div>
        <ReactToPrint
          className="md:1/2"
          content={() => printRef.current}
          trigger={() => (
            <button className=" bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Print sample
            </button>
          )}
        />
        <div className="md:w-1/4"></div>
      </div>
      {/* delete below  line */}
      <button onClick={handleCalculations}>Calccu</button>
      {/* end */}
      {/* pdf viewer */}
      <div className="flex flex-row justify-center bg-slate-50">
        <div className="overflow-auto">
          <div ref={printRef}>
            <Template1 configs={configs} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SampleResume;
