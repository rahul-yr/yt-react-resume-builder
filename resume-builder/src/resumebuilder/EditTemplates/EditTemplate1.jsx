import React, { useState } from "react";
import {
  setUserDetailsAction,
  setObjectiveAction,
  updateEditScreenAction,
} from "./../../redux/template1Slice";
import { useSelector, useDispatch } from "react-redux";
import { Transition } from "@headlessui/react";

function BasicDetailsHeader() {
  const userData = useSelector((state) => state.template1.data.user);
  const userValidations = useSelector(
    (state) => state.template1.validations.user
  );

  const dispatch = useDispatch();

  const handleUserBasicInfo = (key, e) => {
    let fname = e.target.value;
    dispatch(setUserDetailsAction({ key: key, value: fname }));
  };

  return (
    <div>
      <p className="text-xl font-medium text-blue-700">Basic Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.keys(userValidations).map((key) => (
          <div key={key} className="my-2">
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id={key}
              type="text"
              onChange={(e) => handleUserBasicInfo(key, e)}
              value={userData[key]}
              placeholder={userValidations[key].label}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
function Objective() {
  const objectiveData = useSelector((state) => state.template1.data.objective);
  const objectiveValidations = useSelector(
    (state) => state.template1.validations.objective
  );

  const dispatch = useDispatch();
  const handleObjective = (e) => {
    let fname = e.target.value;
    dispatch(setObjectiveAction({ key: "objective", value: fname }));
  };

  return (
    <div>
      <p className="text-xl font-medium text-blue-700">
        {objectiveValidations.label}
      </p>
      <div className="my-2">
        <textarea
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          id="objective"
          type="text"
          onChange={(e) => handleObjective(e)}
          value={objectiveData}
          placeholder="A Professional with a strong knowledge on..."
        />
      </div>
    </div>
  );
}
function ExperienceSummary() {}
function ExperienceDetails() {
  const data = useSelector((state) => state.template1.data.experience);
  const validations = useSelector(
    (state) => state.template1.validations.experience
  );
  const dispatch = useDispatch();
  // local states
  const [localData, setLocalData] = useState({
    company: "",
    role: "",
    start_year: "",
    start_month: "",
    end_year: "",
    end_month: "",
    description: "",
    present: false,
  });

  const handleUpdates = () => {
    // dispatch(setObjectiveAction({ key: key, value: fname }));
  };

  return (
    <React.Fragment>
      <p className="text-xl font-medium text-blue-700">Work History</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.keys(data).map((key) => (
          <div key={key} className="my-2">
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id={key}
              type="text"
              onChange={(e) => {
                setLocalData({ ...localData, [key]: e.target.value });
              }}
              value={localData[key]}
              placeholder={userValidations[key].label}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
function EducationDetails() {}
function SkillsDetails() {}
function CertificationDetails() {}
function LinksDetails() {}

function EditTemplate1() {
  const editScreen = useSelector((state) => state.template1.current.editScreen);
  const dispatch = useDispatch();
  const screens = [
    { name: "Basic Details", component: <BasicDetailsHeader /> },
    { name: "Objective & Experience Summary", component: <Objective /> },
    { name: "Work History", component: <ExperienceDetails /> },
    { name: "Education", component: <EducationDetails /> },
    { name: "Skills", component: <SkillsDetails /> },
    { name: "Certifications", component: <CertificationDetails /> },
    { name: "Links", component: <LinksDetails /> },
  ];

  const addHorinzontalLine = () => {
    return (
      <div>
        <div className="py-4"></div>
        <hr className={"bg-slate-100 mx-10 my-[4pt]"} />
        <div className="py-4"></div>
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-center bg-slate-50">
      <div className="md:w-1/4"></div>
      <div className="w-full md:2/4">
        <div className="bg-white rounded-3xl">
          <div className="flex flex-col p-4">
            {screens[editScreen].component}
            <div className="flex flex-row mt-8">
              <div className="w-1/2 ">
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
              </div>
              <div className="w-1/2 flex flex-row justify-end">
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
