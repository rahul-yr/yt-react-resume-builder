import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  // convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import { convertToHTML } from "draft-convert";

function DraftEditor({ editorState, setEditorState }) {
  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="rounded p-4 "
        editorClassName="rounded p-4 border-2"
        toolbarClassName="rounded p-4 border-2"
        toolbar={{
          options: ["list", "inline"],
          list: { inDropdown: false, options: ["unordered"] },
          inline: { inDropdown: false, options: ["bold", "italic"] },
        }}
      />
    </div>
  );
}

export const ConvertHTMLtoDraft = (html, editorState) => {
  let contentBlocks = convertFromHTML(html);
  let newEditorState = EditorState.push(
    editorState,
    ContentState.createFromBlockArray(contentBlocks)
  );
  return newEditorState;
};

export const ConvertDrafttoHTML = (editorState) => {
  // let data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  let data = convertToHTML(editorState.getCurrentContent());
  return data;
};

export const ResetDraftState = (editorState) => {
  let newEditorState = EditorState.push(
    editorState,
    ContentState.createFromText("")
  );
  return newEditorState;
};

export default DraftEditor;
