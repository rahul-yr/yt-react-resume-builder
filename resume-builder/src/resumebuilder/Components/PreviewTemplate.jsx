import React from "react";
import { TEMPLATE1_CONFIGS, TEMPLATE2_CONFIGS } from "./configs";
import { useMatch } from "react-router-dom";
import Template1 from "../ResumeTemplates/Template1";
import EditTemplatesWhiteBG from "./EditTemplatesWhiteBG";

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
