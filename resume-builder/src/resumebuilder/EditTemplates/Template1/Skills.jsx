import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  addSkillAction,
  updateSkillAction,
  deleteSkillAction,
} from "../../../redux/template1Slice";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";

function Skills() {
  const data = useSelector((state) => state.template1.data.skills);
  const validations = useSelector(
    (state) => state.template1.validations.skills
  );
  const dispatch = useDispatch();
  // local state
  const [localData, setLocalData] = useState({
    skill: "",
    rating: "",
  });
  const [trackEditObject, setTrackEditObject] = useState(null);

  const addData = () => {
    dispatch(addSkillAction({ ...localData }));
    setLocalData({
      skill: "",
      rating: "",
    });
  };

  const updateData = () => {
    dispatch(
      updateSkillAction({ index: trackEditObject, value: { ...localData } })
    );
    setTrackEditObject(null);
    setLocalData({
      skill: "",
      rating: "",
    });
  };

  const deleteData = (index) => {
    dispatch(deleteSkillAction(index));
  };

  const prepareEditDData = (index) => {
    setLocalData({
      skill: data[index].skill,
      rating: data[index].rating,
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
                  {item.skill}
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
              <p className="text-base text-blue-700">Rating : {item.rating}</p>
            </div>
          </div>
          {index < dataCount - 1 && <div className="py-4"></div>}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <p className="text-xl font-medium text-blue-700">Skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="skill"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, skill: e.target.value });
            }}
            value={localData["skill"]}
            placeholder={validations["skill"].label}
          />
        </div>
        <div className="my-2">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
            id="rating"
            type="text"
            onChange={(e) => {
              setLocalData({ ...localData, rating: e.target.value });
            }}
            value={localData["rating"]}
            placeholder={validations["rating"].label}
          />
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
            Add Skill
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

export default Skills;
