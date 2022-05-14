import React from "react";
import { useSelector } from "react-redux";
import Template1 from "./Template1";
function Templates() {
  const userstate = useSelector((state) => state.user);

  return (
    <React.Fragment>
      <div className="px-4 py-4 bg-slate-50 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 text-[6px] justify-items-center">
          <div className=" max-w-xs">
            <Template1 state={userstate} />
          </div>

          <div className="max-w-xs">
            <Template1 state={userstate} />
          </div>

          <div className="max-w-xs">
            <Template1 state={userstate} />
          </div>

          <div className="max-w-xs">
            <Template1 state={userstate} />
          </div>

          <div className="max-w-xs">
            <Template1 state={userstate} />
          </div>

          <div className="max-w-xs">
            <Template1 state={userstate} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Templates;
