import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setObjectiveAction } from "../../../redux/template1Slice";

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

export default Objective;
