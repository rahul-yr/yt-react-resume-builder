import React from "react";

function Footer() {
  return (
    <div className="flex flex-col w-full bg-slate-50 p-4">
      <div className="flex flex-row justify-center items-center mb-2">
        <div className="md:w-1/4"></div>
        <div className="bg-white rounded-xl py-4 w-full md:w-2/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col justify-center items-center ">
              <span>Linkedin</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/4"></div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="md:w-1/4"></div>
        <div className="flex flex-row bg-white rounded-xl py-4 w-full md:w-2/4 items-center justify-center">
          <span>Powered by rahulDev.in</span>
        </div>
        <div className="md:w-1/4"></div>
      </div>
    </div>
  );
}

export default Footer;
