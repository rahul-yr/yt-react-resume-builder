import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addEducationAction,
  updateEducationAction,
  deleteEducationAction,
} from "../../../redux/template1Slice";
import { GenerateMonths, GenerateYears } from "./Utils";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

function EducationDetails() {
  const data = useSelector((state) => state.template1.data.education);
  const validations = useSelector(
    (state) => state.template1.validations.education
  );
  const dispatch = useDispatch();
  // local state
  const [localData, setLocalData] = useState({
    school: "",
    degree: "",
    major: "",
    percentage: "",
    location: "",
    start_year: "",
    start_month: "",
    end_year: "",
    end_month: "",
  });
  const [trackEditObject, setTrackEditObject] = useState(null);

  const addData = () => {
    dispatch(addEducationAction({ ...localData }));
    setLocalData({
      school: "",
      degree: "",
      major: "",
      percentage: "",
      location: "",
      start_year: "",
      start_month: "",
      end_year: "",
      end_month: "",
    });
  };

  const updateData = () => {
    dispatch(
      updateEducationAction({ index: trackEditObject, value: { ...localData } })
    );
    setTrackEditObject(null);
    setLocalData({
      school: "",
      degree: "",
      major: "",
      percentage: "",
      location: "",
      start_year: "",
      start_month: "",
      end_year: "",
      end_month: "",
    });
  };

  const deleteData = (index) => {
    dispatch(deleteEducationAction(index));
  };

  const prepareEditDData = (index) => {
    setLocalData({
      school: data[index].school,
      degree: data[index].degree,
      major: data[index].major,
      percentage: data[index].percentage,
      location: data[index].location,
      start_year: data[index].start_year,
      start_month: data[index].start_month,
      end_year: data[index].end_year,
      end_month: data[index].end_month,
    });
    setTrackEditObject(index);
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
                  {item.school}
                </p>
              </div>
              <div className="flex flex-row px-4">
                <div className="h-min mr-4 rounded-full p-2 shadow border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
                  <PencilIcon
                    className="h-6 w-6"
                    onClick={() => prepareEditDData(index)}
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
            <div className="flex flex-row w-full mt-1">
              <p className="text-base text-blue-700">
                {item.start_month} {item.start_year} - {item.end_month}{" "}
                {item.end_year} ({item.percentage}%)
              </p>
            </div>
            <div className="flex flex-row w-full mt-1">
              <p className="text-base text-gray-700">
                {item.degree} in {item.major}
              </p>
            </div>
            <div className="flex flex-row w-full mt-1">
              <p className="text-base text-gray-700">{item.location}</p>
            </div>
          </div>
          {index < dataCount - 1 && <div className="py-4"></div>}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <p className="text-xl font-medium text-blue-700">Education Details</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="school"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, school: e.target.value });
            }}
            value={localData["school"]}
            placeholder={validations["school"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="degree"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, degree: e.target.value });
            }}
            value={localData["degree"]}
            placeholder={validations["degree"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="major"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, major: e.target.value });
            }}
            value={localData["major"]}
            placeholder={validations["major"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="percentage"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, percentage: e.target.value });
            }}
            value={localData["percentage"]}
            placeholder={validations["percentage"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, location: e.target.value });
            }}
            value={localData["location"]}
            placeholder={validations["location"].label}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
      </div>
      <div className="my-2">
        {trackEditObject !== null ? (
          <button
            onClick={() => updateData()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => addData()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Education
          </button>
        )}
      </div>
      <div>
        <div className="py-4"></div>
        <hr className={"bg-slate-100 mx-10 my-[4px]"} />
        <div className="py-4"></div>
      </div>
      <div className="my-2">{trackEditObject === null && <ShowAllData />}</div>
    </div>
  );
}

export default EducationDetails;
