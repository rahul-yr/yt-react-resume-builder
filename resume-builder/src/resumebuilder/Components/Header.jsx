import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Constants from "../Constants";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItemClasses =
    " text-base font-normal subpixel-antialiased text-purple-700 ";

  const menuItemClassesActive =
    " text-base font-normal subpixel-antialiased text-purple-700 bg-purple-100 rounded-lg ";

  const routeMappings = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Templates",
      route: "/templates",
    },
    {
      label: "Sample Resume",
      route: "/sample/resume",
    },
  ];

  const updateSidebarStatus = () => {
    setIsOpen(!isOpen);
  };

  const handleSidebar = () => {
    return (
      <div className="relative w-full bg-white z-[50] p-4 ">
        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="flex flex-col flex-wrap ">
            {/* <hr className={"bg-slate-100 my-[4pt]"} /> */}
            {routeMappings.map((route, index) => {
              return (
                <Link
                  key={index}
                  className={`p-2 ${
                    route.route === window.location.pathname
                      ? menuItemClassesActive
                      : menuItemClasses
                  }`}
                  to={route.route}
                >
                  {route.label}
                </Link>
              );
            })}
          </div>
        </Transition>
      </div>
    );
  };

  const mobileHeader = () => {
    return (
      <div>
        <div className="flex flex-row flex-wrap shadow-md py-2">
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
          <div className="basis-1/5">
            <div
              className="flex flex-row justify-center items-center h-full w-full"
              onClick={() => updateSidebarStatus()}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6 text-purple-500" />
              ) : (
                <MenuAlt1Icon className="h-6 w-6 text-purple-500" />
              )}
            </div>
          </div>
        </div>
        {isOpen && handleSidebar()}
      </div>
    );
  };

  const desktopHeader = () => {
    return (
      <div className="flex flex-row flex-wrap shadow-md justify-between py-2">
        <div className="flex flex-row flex-wrap my-1 ml-10">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            alt="logo"
            width={60}
          />
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
          {routeMappings.map((route, index) => {
            return (
              <Link
                key={index}
                className={`px-2 py-2 mx-2  ${
                  route.route === window.location.pathname
                    ? menuItemClassesActive
                    : menuItemClasses
                }`}
                to={route.route}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="md:hidden">{mobileHeader()}</div>
      <div className="hidden md:block">{desktopHeader()}</div>
    </React.Fragment>
  );
}

export default Header;
