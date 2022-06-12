import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  setObjectiveAction,
  updateSummaryAction,
} from "../../../redux/template1Slice";
import { EditorState, convertFromHTML, ContentState } from "draft-js";
import parse from "html-react-parser";
import DraftEditor, { ConvertDrafttoHTML } from "../DraftEditor";

function Objective() {
  const objectiveData = useSelector((state) => state.template1.data.objective);
  const objectiveValidations = useSelector(
    (state) => state.template1.validations.objective
  );

  const summaryData = useSelector((state) => state.template1.data.summary);
  //   declare local states
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(summaryData))
    )
  );

  const dispatch = useDispatch();
  const handleObjective = (e) => {
    let fname = e.target.value;
    dispatch(setObjectiveAction({ key: "objective", value: fname }));
  };

  const updateSummaryState = () => {
    let desc = "";
    if (
      editorState.getCurrentContent().hasText() &&
      editorState.getCurrentContent().getPlainText().trim().length > 0
    ) {
      desc = ConvertDrafttoHTML(editorState);
    }
    dispatch(updateSummaryAction(desc));
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
      <p className="text-xl font-medium text-blue-700 mt-2">Summary</p>
      <div className="my-2">
        <DraftEditor
          editorState={editorState}
          setEditorState={setEditorState}
        />
      </div>
      <div className="flex flex-row">
        <div className="w-full md:w-1/2"></div>
        <div className="w-full md:w-1/2 ">
          <div className="flex flex-row justify-end">
            <button
              onClick={() => updateSummaryState()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update Summary
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="py-4"></div>
        <hr className={"bg-slate-100 mx-10 my-[4px]"} />
        <div className="py-4"></div>
      </div>
      {summaryData.trim().length > 0 && (
        <div className="shadow hover:shadow-lg p-4">
          <div className="text-base text-gray-700">
            {parse(summaryData, {
              replace: (domNode) => {
                if (domNode.name === "ul") {
                  return (domNode.attribs.class = "list-disc list-inside");
                }
              },
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Objective;
