import React from "react";

function EditTemplatesWhiteBG({ children }) {
  console.log(children);
  return (
    <div className="flex flex-row justify-center bg-slate-50">
      <div className="md:w-1/4"></div>
      <div className="w-full md:2/4">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col p-4">{children}</div>
        </div>
      </div>
      <div className="md:w-1/4"></div>
    </div>
  );
}

export default EditTemplatesWhiteBG;
