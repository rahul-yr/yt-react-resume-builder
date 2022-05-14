import React from "react";
import { Link } from "react-router-dom";
import * as Constants from "../Constants";

function Header() {
  return (
    <React.Fragment>
      <div className="md:hidden">{mobileHeader()}</div>
      <div className="hidden md:block">{desktopHeader()}</div>
    </React.Fragment>
  );
}

const mobileHeader = () => {
  return (
    <div className="flex flex-row flex-wrap shadow-md">
      <div className="basis-4/5">
        <div className="flex flex-row my-1">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            alt="logo"
            width={60}
          />
          <div className="flex flex-col pl-1 ">
            <p className="text-xl font-normal select-none subpixel-antialiased text-purple-700">
              {Constants.APP_NAME}
            </p>
            <span className="text-base text-center select-none rounded text-white bg-gradient-to-r from-purple-500 to-pink-500">
              {Constants.OWNER_NAME}
            </span>
          </div>
        </div>
      </div>
      <div className="basis-1/5">Icon</div>
    </div>
  );
};

const desktopHeader = () => {
  return (
    <div className="flex flex-row flex-wrap shadow-md justify-between">
      <div className="flex flex-row flex-wrap my-1 ml-10">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" width={60} />
        <div className="flex flex-col pl-2 ">
          <p className="text-xl font-normal select-none subpixel-antialiased text-purple-700">
            {Constants.APP_NAME}
          </p>
          <span className="text-base text-center select-none rounded text-white bg-gradient-to-r from-purple-500 to-pink-500">
            {Constants.OWNER_NAME}
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mr-4 justify-center items-center">
        <p className="text-base font-normal subpixel-antialiased text-purple-700 px-2">
          <Link to="/">Home</Link>
        </p>
        <p className="text-base font-normal subpixel-antialiased text-purple-700 px-2">
          <Link to="/templates">Templates</Link>
        </p>
        <p className="text-base font-normal subpixel-antialiased text-purple-700 px-2">
          <Link to="/template/1">Template 1</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
