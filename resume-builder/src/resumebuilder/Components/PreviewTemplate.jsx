import React from "react";
import { useMatch } from "react-router-dom";
import Template1 from "../ResumeTemplates/Template1";
const TEMPLATE1_CONFIGS = {
  // common
  titleFontSize: " text-[16pt] ",
  boldTextSize: " text-[14pt] ",
  primaryTextSize: " text-[12pt] ",
  infoTextSize: " text-[10pt] ",
  fontFamily: " font-sans ",
  pageBackgroundColor: " bg-slate-100 ",
  blockBackgroundColor: " bg-white ",
  primaryFontColor: " text-black ",
  headingFontColor: " text-blue-700 ",
  // rating
  ratingBarColor: " bg-gray-200 ",
  ratingBarFillColor: " bg-yellow-400 ",
  ratingBarHeight: " h-[4pt] ",
  // link underline color
  linkUnderlineColor: " decoration-slate-300 ",
  // paper size
  paperSize: " w-[209mm] h-[296mm] ",
};

const TEMPLATE2_CONFIGS = {
  // common
  titleFontSize: " text-[16pt] ",
  boldTextSize: " text-[14pt] ",
  primaryTextSize: " text-[12pt] ",
  infoTextSize: " text-[10pt] ",
  fontFamily: " font-sans ",
  pageBackgroundColor: " bg-slate-100 ",
  blockBackgroundColor: " bg-gray-100 ",
  primaryFontColor: " text-black ",
  headingFontColor: " text-purple-500 ",
  // rating
  ratingBarColor: " bg-gray-200 ",
  ratingBarFillColor: " bg-yellow-400 ",
  ratingBarHeight: " h-[4pt] ",
  // link underline color
  linkUnderlineColor: " decoration-slate-300 ",
  // paper size
  paperSize: " w-[209mm] h-[296mm] ",
};

function PreviewTemplate() {
  const match = useMatch("/template/:id");

  // update template files dynamically
  if (match.params.id === "1") {
    return <Template1 configs={TEMPLATE1_CONFIGS} />;
  } else if (match.params.id === "2") {
    return <Template1 configs={TEMPLATE2_CONFIGS} />;
  } else {
    return <span>Template details are not available</span>;
  }
}

export default PreviewTemplate;
