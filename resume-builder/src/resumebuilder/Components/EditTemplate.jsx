import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import PreviewTemplate from "./PreviewTemplate";
import { useMatch } from "react-router-dom";
import EditTemplate1 from "../EditTemplates/Template1/EditTemplate1";
import EditTemplatesWhiteBG from "./EditTemplatesWhiteBG";

function EditTemplate() {
  const printRef = useRef();
  const [previewMode, setPreviewMode] = useState(false);

  // const handleCalculations = () => {
  //   console.log(printRef.current.clientWidth, printRef.current.clientHeight);
  //   console.log(printRef.current.scrollHeight);
  // };

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
            <PreviewTemplate />
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="flex flex-row justify-start p-4 bg-slate-50">
        <div className="md:w-1/4"></div>
        <div className="w-full md:2/4">{allButtons()}</div>
        <div className="md:w-1/4"></div>
      </div>
      {/* pdf viewer */}
      {previewMode === true ? <PdfViewer /> : <EditDetails />}
      <div className="py-8 bg-slate-50">&nbsp;</div>
    </React.Fragment>
  );
}

function EditDetails() {
  const match = useMatch("/template/:id");
  const id = match.params.id;
  if (id === "1" || id === "2") {
    return <EditTemplate1 />;
  } else {
    return (
      <EditTemplatesWhiteBG>
        <p>No template found</p>
      </EditTemplatesWhiteBG>
    );
  }
}

export default EditTemplate;
