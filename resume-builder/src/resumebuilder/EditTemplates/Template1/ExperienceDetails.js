import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addExperienceAction,
  updateExperienceAction,
  deleteExperienceAction,
} from "../../../redux/template1Slice";
import { EditorState } from "draft-js";
import DraftEditor, {
  ConvertDrafttoHTML,
  ConvertHTMLtoDraft,
  ResetDraftState,
} from "../DraftEditor";
import { GenerateMonths, GenerateYears } from "./Utils";
import parse from "html-react-parser";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

function ExperienceDetails() {
  // define global states
  const data = useSelector((state) => state.template1.data.experience);
  const validations = useSelector(
    (state) => state.template1.validations.experience
  );
  const dispatch = useDispatch();
  //   declare local states
  const [editorState, setEditorState] = useState(() =>
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
  const [trackEditObject, setTrackEditObject] = useState(null);

  const addData = () => {
    let desc = "";
    if (
      editorState.getCurrentContent().hasText() &&
      editorState.getCurrentContent().getPlainText().trim().length > 0
    ) {
      desc = ConvertDrafttoHTML(editorState);
    }
    dispatch(
      addExperienceAction({
        ...localData,
        description: desc,
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
    setEditorState(ResetDraftState(editorState));
    setTrackEditObject(null);
  };

  const editData = (index) => {
    setLocalData({
      company: data[index].company,
      role: data[index].role,
      start_year: data[index].start_year,
      start_month: data[index].start_month,
      end_year: data[index].end_year,
      end_month: data[index].end_month,
      present: data[index].present,
    });

    if (data[index].description && data[index].description.length > 0) {
      setEditorState(ConvertHTMLtoDraft(data[index].description, editorState));
    } else {
      setEditorState(ResetDraftState(editorState));
    }
    setTrackEditObject(index);
  };

  const saveUpdatedData = () => {
    let desc = "";
    if (
      editorState.getCurrentContent().hasText() &&
      editorState.getCurrentContent().getPlainText().trim().length > 0
    ) {
      desc = ConvertDrafttoHTML(editorState);
    }
    dispatch(
      updateExperienceAction({
        index: trackEditObject,
        value: {
          ...localData,
          description: desc,
        },
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
    setEditorState(ResetDraftState(editorState));
    setTrackEditObject(null);
  };

  const deleteData = (index) => {
    dispatch(deleteExperienceAction(index));
  };

  const ShowAllData = () => {
    const dataCount = data.length;
    return data.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div className="flex flex-col shadow hover:shadow-lg p-4">
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row">
                <p className="text-xl font-medium text-blue-700">
                  {item.company} ({item.role})
                </p>
              </div>
              <div className="flex flex-row px-4">
                <div className="h-min mr-4 rounded-full p-2 shadow border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                  <PencilIcon
                    className="h-6 w-6"
                    onClick={() => editData(index)}
                  />
                </div>
                <div className="h-min rounded-full p-2 shadow border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer">
                  <TrashIcon
                    className="h-6 w-6"
                    onClick={() => deleteData(index)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <p className="text-base text-blue-700">
                {item.start_month} {item.start_year} -{" "}
                {item.present
                  ? "Present"
                  : item.end_month + " " + item.end_year}
              </p>
            </div>
            <div>
              {parse(item.description, {
                replace: (domNode) => {
                  if (domNode.name === "ul") {
                    return (domNode.attribs.class = "list-disc list-inside");
                  }
                },
              })}
            </div>
          </div>
          {index < dataCount - 1 && <div className="py-4"></div>}
        </React.Fragment>
      );
    });
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
        <DraftEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>
      <div className="my-2">
        {trackEditObject !== null ? (
          <button
            onClick={() => saveUpdatedData()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => addData()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Details
          </button>
        )}
      </div>

      <div className="my-2">{trackEditObject === null && <ShowAllData />}</div>
      <div>
        <div className="py-4"></div>
        <hr className={"bg-slate-100 mx-10 my-[4pt]"} />
        <div className="py-4"></div>
      </div>
    </React.Fragment>
  );
}

export default ExperienceDetails;
