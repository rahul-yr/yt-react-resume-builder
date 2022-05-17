import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Home() {
  return (
    <div className="bg-slate-50 h-screen w-full py-4">
      <div className=" m-4 ">
        <div className="flex flex-row justify-center">
          <div className="md:w-1/4"></div>
          <div className="bg-white rounded-3xl py-4 px-2 w-full md:w-2/4">
            <p className="text-xl pl-4 py-4 font-medium text-blue-700">
              What you will Learn?
            </p>
            <ul className="text-base md:text-lg pl-4 py-4 text-gray-700 list-disc list-inside">
              <li>
                We will develop a fully responsive Resume Builder using React.js
                and Tailwind css .
              </li>
              <li>
                Say Goodbye to the boring{" "}
                <span className="text-orange-500 bg-orange-100 hover:bg-orange-200  rounded-lg font-semibold">
                  Todo App
                </span>{" "}
                and say Hello to the{" "}
                <span className=" font-semibold bg-purple-100  rounded-lg text-purple-500 hover:bg-purple-200">
                  Resume Builder
                </span>
                .
              </li>
            </ul>
            <hr className={"bg-slate-100 my-[4pt]"} />
            <div className="py-4"></div>

            <MainContent label={"Pre requisites"}>
              <ul className="list-disc list-inside">
                <li>
                  <span>React Basics</span>
                </li>
                <li>
                  <span>Node.js Installation</span>
                </li>
              </ul>
            </MainContent>
            <div className="py-4"></div>
            <MainContent label={"Topics used"}>
              <ul className="list-disc list-inside">
                <li>
                  <span>React Hooks</span>
                </li>
                <li>
                  <span>React Router V6</span>
                </li>
                <li>
                  <span>Redux Toolkit</span>
                </li>
                <li>
                  <span>Tailwind css</span>
                </li>
              </ul>
            </MainContent>
          </div>
          <div className="md:w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

function MainContent({ label, children }) {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <React.Fragment>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span className="text-lg">{label}</span>
            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-6 w-6 text-purple-500`}
            />
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-base md:text-lg text-gray-500">
              {children}
            </Disclosure.Panel>
          </Transition>
        </React.Fragment>
      )}
    </Disclosure>
  );
}

export default Home;
