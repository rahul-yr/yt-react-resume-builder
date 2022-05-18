import React, { useState } from "react";
import {
  setUserDetailsAction,
  setObjectiveAction,
  updateEditScreenAction,
  addExperienceAction,
  updateExperienceAction,
  deleteExperienceAction,
} from "./../../redux/template1Slice";
import { useSelector, useDispatch } from "react-redux";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./RTE.css";
import draftToHtml from "draftjs-to-html";

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

function GenerateYears() {
  var i = new Date().getFullYear();
  var j = i - 60;

  // iterate through years and add to option tag
  var options = [];
  for (var year = i; year > j; year--) {
    options.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }
  return options;
}

function GenerateMonths() {
  // 3 letters months  list
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var options = [];
  for (var i = 0; i < months.length; i++) {
    options.push(
      <option key={i} value={months[i]}>
        {months[i]}
      </option>
    );
  }
  return options;
}

function ExperienceDetails() {
  const data = useSelector((state) => state.template1.data.experience);
  const validations = useSelector(
    (state) => state.template1.validations.experience
  );
  const dispatch = useDispatch();
  // local states
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [localData, setLocalData] = useState({
    company: "",
    role: "",
    start_year: "",
    start_month: "",
    end_year: "",
    end_month: "",
    present: true,
  });
  const addData = () => {
    dispatch(
      addExperienceAction({
        ...localData,
        description: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      })
    );
    setLocalData({
      company: "",
      role: "",
      start_year: "",
      start_month: "",
      end_year: "",
      end_month: "",
      present: true,
    });
    let newEdS = EditorState.push(editorState, ContentState.createFromText(""));
    setEditorState(newEdS);
  };

  return (
    <React.Fragment>
      <p className="text-xl font-medium text-blue-700">Work History</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, company: e.target.value });
            }}
            value={localData["company"]}
            placeholder={validations["company"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, role: e.target.value });
            }}
            value={localData["role"]}
            placeholder={validations["role"].label}
          />
        </div>
        <div className="my-2">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="start_year"
            value={localData["start_year"]}
            onChange={(e) => {
              setLocalData({ ...localData, start_year: e.target.value });
            }}
          >
            <option value="">Start Year</option>
            <GenerateYears />
          </select>
        </div>
        <div className="my-2">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="start_month"
            value={localData["start_month"]}
            onChange={(e) => {
              setLocalData({ ...localData, start_month: e.target.value });
            }}
          >
            <option value="">Start Month</option>
            <GenerateMonths />
          </select>
        </div>
        {localData["present"] === false && (
          <React.Fragment>
            <div className="my-2">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="end_year"
                value={localData["end_year"]}
                onChange={(e) => {
                  setLocalData({ ...localData, end_year: e.target.value });
                }}
              >
                <option value="">End Year</option>
                <GenerateYears />
              </select>
            </div>
            <div className="my-2">
              <select
                className=" block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="end_month"
                value={localData["end_month"]}
                onChange={(e) => {
                  setLocalData({ ...localData, end_month: e.target.value });
                }}
              >
                <option value="">End Month</option>
                <GenerateMonths />
              </select>
            </div>
          </React.Fragment>
        )}

        <div className="my-2">
          <input
            className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            onChange={(e) => {
              setLocalData({ ...localData, present: e.target.checked });
            }}
            value={localData["present"]}
            id="present"
            checked={localData["present"]}
          />
          <label className="form-check-label inline-block text-gray-800">
            Currently working here
          </label>
        </div>
      </div>
      <p className="text-xl font-medium text-blue-700 mt-4">Description</p>
      <div className="my-2 ">
        {/* <textarea
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          onChange={(e) => {
            setLocalData({ ...localData, description: e.target.value });
          }}
          value={localData["description"]}
          placeholder="Work Description"
        /> */}
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ["list"],
          }}
        />
      </div>
      <div className="my-2">
        <button
          onClick={() => addData()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Details
        </button>
      </div>
      <div>
        <div className="py-4"></div>
        <hr className={"bg-slate-100 mx-10 my-[4pt]"} />
        <div className="py-4"></div>
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
