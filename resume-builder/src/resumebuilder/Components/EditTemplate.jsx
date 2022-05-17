import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Template1 from "./../ResumeTemplates/Template1";

function EditTemplate() {
  const printRef = useRef();
  const [previewMode, setPreviewMode] = useState(false);
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
    // paper size
    paperSize: " w-[209mm] h-[296mm] ",
  };

  const allButtons = () => {
    return (
      <div className="flex flex-row">
        {previewMode === false ? (
          <button
            onClick={() => {
              setPreviewMode(true);
            }}
            className=" bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview
          </button>
        ) : (
          <button
            onClick={() => {
              setPreviewMode(false);
            }}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit
          </button>
        )}
        {previewMode === true && (
          <ReactToPrint
            content={() => printRef.current}
            trigger={() => (
              <button className="ml-1 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Download
              </button>
            )}
          />
        )}
      </div>
    );
  };

  function PdfViewer() {
    return (
      <div className="flex flex-row justify-center bg-slate-50">
        <div className="overflow-auto">
          <div ref={printRef}>
            <Template1 configs={configs} />
          </div>
        </div>
      </div>
    );
  }

  function EditDetails() {
    return (
      <div className="flex flex-row justify-center bg-slate-50">
        <div className="overflow-auto">
          <div>Edit View</div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="flex flex-row justify-start p-4 bg-slate-50">
        <div className="md:w-1/4"></div>
        <div className="md:1/2">{allButtons()}</div>
        <div className="md:w-1/4"></div>
      </div>
      {/* pdf viewer */}
      {previewMode === true ? <PdfViewer /> : <EditDetails />}
      <div className="py-8 bg-slate-50">&nbsp;</div>
    </React.Fragment>
  );
}

export default EditTemplate;
