import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUserDetailsAction } from "../../../redux/template1Slice";

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

export default BasicDetailsHeader;
