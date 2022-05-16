import React from "react";
import Ratings from "./Ratings";
import parse from "html-react-parser";
import "./../../App.css";

function Template1(props) {
  const headingTextColor = "text-blue-700 subpixel-antialiased";
  const primaryTextColor = "text-black subpixel-antialiased";

  const iterateSampleSkillData = () => {
    return props.state.skills.sample_data.map((skill, index) => {
      return (
        <div key={index} className="flex flex-row  items-center">
          <div className="w-2/3">
            <p className={`text-[0.8em] truncate ` + primaryTextColor}>
              {skill.skill}
              &nbsp;
            </p>
          </div>
          <div className="w-1/3">{<Ratings rating={skill.rating} />}</div>
        </div>
      );
    });
  };

  const iterateSampleEducationData = () => {
    return props.state.education.sample_data.map((edu, index) => {
      return (
        <React.Fragment key={index}>
          <div className="my-1"></div>
          <p className={`text-[0.8em] ` + headingTextColor}>
            {edu.start_month}&nbsp;
            {edu.start_year} - {edu.end_month}&nbsp;
            {edu.end_year}&nbsp; ({edu.percentage}%)
          </p>
          <p className={`text-[0.8em] ` + primaryTextColor}>
            {edu.degree}&nbsp;(
            {edu.major})
          </p>
          <p className={`text-[0.8em]  ` + primaryTextColor}>{edu.school}</p>
          <p className={`text-[0.8em]  ` + primaryTextColor}>{edu.location}</p>
        </React.Fragment>
      );
    });
  };

  const iterateSampleExperienceData = () => {
    return props.state.experience.sample_data.map((exp, index) => {
      return (
        <div key={index} className="page-break">
          <div className="my-1"></div>
          <div className="flex flex-row">
            <div className="w-1/2">
              <p className={`text-[1em] ` + headingTextColor}>
                {exp.role}&nbsp;({exp.company})
              </p>
            </div>
            <div className="w-1/2 ">
              <p className={`text-[1em] text-right  ` + headingTextColor}>
                {exp.start_month}&nbsp;
                {exp.start_year} - {exp.end_month}&nbsp;
                {exp.end_year}&nbsp;
              </p>
            </div>
          </div>
          <div className={`m-2 px-4 text-[1.1em] ` + primaryTextColor}>
            {parse(exp.description, {
              replace: (domNode) => {
                if (domNode.name === "ul") {
                  return (domNode.attribs.class = "list-disc");
                }
              },
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className=" bg-slate-100 p-1">
        {/* header */}
        <div className="bg-white rounded-xl flex flex-row items-center">
          <div className="w-1/3">
            <div className="flex flex-col my-2 mx-4">
              <p className={`text-[1.2em] truncate ` + primaryTextColor}>
                {props.state.headings.fname.default}&nbsp;
                {props.state.headings.lname.default}
              </p>
              <p
                className={
                  `text-[1.2em font-medium truncate ` + headingTextColor
                }
              >
                {props.state.headings.profession.default}
              </p>
              <p
                className={
                  `text-[0.8em] font-medium truncate ` + headingTextColor
                }
              >
                {props.state.headings.email.default}
              </p>
              <p
                className={
                  `text-[0.8em] font-medium truncate ` + headingTextColor
                }
              >
                {props.state.headings.phone.default}
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <p
              className={
                `m-2 text-[1em] break-words text-ellipsis ` + primaryTextColor
              }
            >
              {props.state.headings.objective.default}
            </p>
          </div>
        </div>
        {/* body */}
        <div className="flex flex-row mt-1 items-stretch">
          <div className="w-1/3">
            {/* education */}
            <div className="flex flex-col bg-white rounded-xl p-2">
              <p
                className={
                  `text-[1em] truncate font-medium ` + headingTextColor
                }
              >
                Education
              </p>
              {iterateSampleEducationData()}
            </div>
            {/* spacing */}
            <div className="m-1"></div>
            {/* skills */}
            <div className="flex flex-col bg-white rounded-xl p-2">
              <p
                className={
                  `text-[1em] truncate font-medium ` + headingTextColor
                }
              >
                Skills
              </p>
              {iterateSampleSkillData()}
            </div>
          </div>

          <div className="w-2/3">
            <div className="flex flex-col bg-white rounded-xl p-2 ml-1">
              <p
                className={
                  `text-[1em] truncate font-medium ` + headingTextColor
                }
              >
                Experience summary
              </p>
              <div className={`m-2 text-[1.1em] px-4 ` + primaryTextColor}>
                {parse(props.state.summary.default, {
                  replace: (domNode) => {
                    if (domNode.name === "ul") {
                      return (domNode.attribs.class = "list-disc");
                    }
                  },
                })}
              </div>
            </div>
            <div className="my-1"></div>
            <div className="flex flex-col bg-white rounded-xl p-2 ml-1">
              <p
                className={
                  `text-[1em] truncate font-medium ` + headingTextColor
                }
              >
                Experience details
              </p>
              <div className="block">{iterateSampleExperienceData()}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Template1;
