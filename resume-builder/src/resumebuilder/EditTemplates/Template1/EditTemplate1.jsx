import React from "react";
import { updateEditScreenAction } from "../../../redux/template1Slice";
import { useSelector, useDispatch } from "react-redux";

import BasicDetailsHeader from "./BasicDetailsHeader";
import Objective from "./Objective";
import ExperienceDetails from "./ExperienceDetails";
import EducationDetails from "./EducationDetails";
import Skills from "./Skills";
import Certifications from "./Certfications";
import Links from "./Links";

function EditTemplate1() {
  const editScreen = useSelector((state) => state.template1.current.editScreen);
  const dispatch = useDispatch();
  const screens = [
    { name: "Basic Details", component: <BasicDetailsHeader /> },
    { name: "Objective & Experience Summary", component: <Objective /> },
    { name: "Work History", component: <ExperienceDetails /> },
    { name: "Education", component: <EducationDetails /> },
    { name: "Skills", component: <Skills /> },
    { name: "Certifications", component: <Certifications /> },
    { name: "Links", component: <Links /> },
  ];

  return (
    <div className="flex flex-row justify-center bg-slate-50">
      <div className="md:w-1/4"></div>
      <div className="w-full md:2/4">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col p-4">
            {screens[editScreen].component}
            <div className="flex flex-row mt-8">
              <div className="w-1/2 ">
                {editScreen > 0 && (
                  <button
                    onClick={() => {
                      if (editScreen > 0) {
                        dispatch(updateEditScreenAction(editScreen - 1));
                      }
                    }}
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
                  >
                    Back
                  </button>
                )}
              </div>
              <div className="w-1/2 flex flex-row justify-end">
                {editScreen < screens.length - 1 && (
                  <button
                    onClick={() => {
                      if (editScreen < screens.length - 1) {
                        dispatch(updateEditScreenAction(editScreen + 1));
                      }
                    }}
                    className="bg-orange-500 text-white font-bold py-2 px-4 rounded border-2 border-orange-500 hover:bg-transparent hover:text-orange-500 transition-all duration-300"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4"></div>
    </div>
  );
}

export default EditTemplate1;
