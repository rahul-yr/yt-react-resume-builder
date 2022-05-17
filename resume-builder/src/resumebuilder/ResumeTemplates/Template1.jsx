import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";

function Template1(props) {
  const defaults = useSelector((state) => state.template1.data);
  const textSmoothing = " subpixel-antialiased ";
  const blockOuterMargin = " m-[2pt] ";
  const blockInternalPadding = " px-[4pt] py-[12pt] ";
  const tail_css =
    ` rounded-3xl ` +
    props.configs.blockBackgroundColor +
    blockOuterMargin +
    blockInternalPadding;

  const headerBlock = () => {
    if (
      defaults.user.fname.length > 1 ||
      defaults.user.lname.length > 1 ||
      defaults.user.profession.length > 1 ||
      defaults.user.email.length > 1 ||
      defaults.user.phone.length > 1 ||
      defaults.objective.length > 1
    ) {
      return (
        <div
          className={
            `rounded-3xl flex flex-row items-center ` +
            props.configs.blockBackgroundColor +
            blockOuterMargin
          }
        >
          <div className={`w-1/3` + blockInternalPadding}>
            <div className="flex flex-col ">
              <p
                className={
                  `font-bold truncate ` +
                  props.configs.primaryFontColor +
                  props.configs.boldTextSize +
                  textSmoothing
                }
              >
                {defaults.user.fname}&nbsp;
                {defaults.user.lname}
              </p>
              <p
                className={
                  `font-bold truncate ` +
                  props.configs.headingFontColor +
                  props.configs.titleFontSize +
                  textSmoothing
                }
              >
                {defaults.user.profession}
              </p>
              <p
                className={
                  ` font-medium truncate` +
                  props.configs.headingFontColor +
                  props.configs.primaryTextSize +
                  textSmoothing
                }
              >
                {defaults.user.email.length > 1 && (
                  <FontAwesomeIcon icon={faEnvelope} />
                )}
                &nbsp;
                {defaults.user.email}
              </p>
              <p
                className={
                  ` font-medium truncate ` +
                  props.configs.headingFontColor +
                  props.configs.primaryTextSize +
                  textSmoothing
                }
              >
                {defaults.user.phone.length > 1 && (
                  <FontAwesomeIcon icon={faPhone} />
                )}
                &nbsp;
                {defaults.user.phone}
              </p>
            </div>
          </div>
          <div className={`w-2/3` + blockInternalPadding}>
            <p
              className={
                `m-2 break-words text-ellipsis ` +
                props.configs.primaryFontColor +
                props.configs.primaryTextSize +
                textSmoothing
              }
            >
              {defaults.objective}
            </p>
          </div>
        </div>
      );
    }
  };

  const educationBlock = () => {
    const total_education_length = defaults.education.length;

    if (total_education_length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `truncate font-medium ` +
              props.configs.boldTextSize +
              props.configs.headingFontColor
            }
          >
            Education
          </p>
          {defaults.education.map((edu, index) => {
            return (
              <div key={index}>
                <p
                  className={
                    props.configs.primaryTextSize +
                    props.configs.headingFontColor
                  }
                >
                  {edu.start_month}&nbsp;
                  {edu.start_year} - {edu.end_month}&nbsp;
                  {edu.end_year}&nbsp; ({edu.percentage}%)
                </p>
                <p
                  className={
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor
                  }
                >
                  {edu.degree}&nbsp;(
                  {edu.major})
                </p>
                <p
                  className={
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor
                  }
                >
                  {edu.school}
                </p>
                <p
                  className={
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor
                  }
                >
                  {edu.location}
                </p>
                {index < total_education_length - 1 && (
                  <hr
                    className={props.configs.pageBackgroundColor + " my-[4pt]"}
                  />
                )}
              </div>
            );
          })}
        </CommonLayout>
      );
    }
  };

  const skillsBlock = () => {
    const total_skills_length = defaults.skills.length;
    if (total_skills_length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `truncate font-medium ` +
              props.configs.boldTextSize +
              props.configs.headingFontColor
            }
          >
            Skills
          </p>
          {defaults.skills.map((skill, index) => {
            return (
              <div key={index} className="flex flex-row  items-center">
                <div className="w-2/3">
                  <p
                    className={
                      `truncate ` +
                      props.configs.primaryTextSize +
                      props.configs.primaryFontColor
                    }
                  >
                    {skill.skill}
                    &nbsp;
                  </p>
                </div>
                <div className="w-1/3">
                  {
                    <Ratings
                      key={index}
                      height={props.configs.ratingBarHeight}
                      filledWidth={`w-[` + skill.rating * 20 + `%]`}
                      bgColor={props.configs.ratingBarColor}
                      fillColor={props.configs.ratingBarFillColor}
                    />
                  }
                </div>
              </div>
            );
          })}
        </CommonLayout>
      );
    }
  };

  const certificationsBlock = () => {
    const total_certifications_length = defaults.certifications.length;
    if (total_certifications_length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `truncate font-medium ` +
              props.configs.primaryTextSize +
              props.configs.headingFontColor
            }
          >
            Certifications
          </p>
          {defaults.certifications.map((certification, index) => {
            return (
              <div className="truncate" key={index}>
                <a
                  className={
                    `underline` +
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor +
                    props.configs.linkUnderlineColor
                  }
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certification.name}
                </a>
              </div>
            );
          })}
        </CommonLayout>
      );
    }
  };

  const linksBlock = () => {
    const total_links_length = defaults.links.length;
    if (total_links_length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `truncate font-medium ` +
              props.configs.primaryTextSize +
              props.configs.headingFontColor
            }
          >
            Links
          </p>
          {defaults.links.map((website, index) => {
            return (
              <div className="truncate" key={index}>
                <a
                  className={
                    `underline` +
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor +
                    props.configs.linkUnderlineColor
                  }
                  href={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website.name}
                </a>
              </div>
            );
          })}
        </CommonLayout>
      );
    }
  };

  const leftSection = () => {
    return (
      <div className="w-1/3">
        <div className="flex flex-col">
          {/* education */}
          {educationBlock()}
          {/* skills */}
          {skillsBlock()}
          {/* certifications */}
          {certificationsBlock()}
          {/* Links */}
          {linksBlock()}
        </div>
      </div>
    );
  };

  const summaryBlock = () => {
    if (defaults.summary.length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `truncate font-medium ` +
              props.configs.boldTextSize +
              props.configs.headingFontColor
            }
          >
            Experience Summary
          </p>
          <div
            className={
              props.configs.primaryTextSize +
              props.configs.primaryFontColor +
              ` break-words`
            }
          >
            {parse(defaults.summary, {
              replace: (domNode) => {
                if (domNode.name === "ul") {
                  return (domNode.attribs.class = "list-disc list-inside");
                }
              },
            })}
          </div>
        </CommonLayout>
      );
    }
  };

  const experienceBlock = () => {
    const total_work_history_length = defaults.experience.length;
    if (total_work_history_length === 0) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <CommonLayout tail_css={tail_css}>
          <p
            className={
              `font-medium ` +
              props.configs.boldTextSize +
              props.configs.headingFontColor
            }
          >
            Work History
          </p>
          {defaults.experience.map((work, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row">
                  <div className="w-2/3">
                    <p
                      className={
                        props.configs.primaryTextSize +
                        props.configs.headingFontColor
                      }
                    >
                      {work.role}&nbsp;({work.company})
                    </p>
                  </div>
                  <div className="w-1/3 ">
                    <p
                      className={
                        `text-right  truncate ` +
                        props.configs.infoTextSize +
                        props.configs.headingFontColor
                      }
                    >
                      {work.start_month}&nbsp;
                      {work.start_year} -{" "}
                      {work.present === true
                        ? "Present"
                        : work.end_month + " " + work.end_year}
                    </p>
                  </div>
                </div>
                <div
                  className={
                    props.configs.primaryTextSize +
                    props.configs.primaryFontColor
                  }
                >
                  {parse(work.description, {
                    replace: (domNode) => {
                      if (domNode.name === "ul") {
                        return (domNode.attribs.class =
                          "list-disc list-inside");
                      }
                    },
                  })}
                </div>
                {index < total_work_history_length - 1 && (
                  <hr
                    className={props.configs.pageBackgroundColor + " my-[8pt]"}
                  />
                )}
              </div>
            );
          })}
        </CommonLayout>
      );
    }
  };

  const rightSection = () => {
    return (
      <div className="w-2/3">
        <div className="flex flex-col">
          {/* summary block */}
          {summaryBlock()}
          {/* experience block */}
          {experienceBlock()}
        </div>
      </div>
    );
  };

  return (
    // remove below classes if something goes wrong
    <div className="max-w-sm md:max-w-max">
      <div
        className={
          `  p-[4pt]  ` +
          props.configs.pageBackgroundColor +
          props.configs.paperSize
        }
      >
        {headerBlock()}
        <div className="flex flex-row">
          {leftSection()}
          {rightSection()}
        </div>
      </div>
    </div>
  );
}

export default Template1;

function CommonLayout(props) {
  return <div className={props.tail_css}>{props.children}</div>;
}

function Ratings({ height, filledWidth, bgColor, fillColor }) {
  return (
    <div className={"mx-[2pt] rounded " + height + bgColor}>
      {filledWidth.includes("20%") && (
        <div className={`rounded w-[20%] ` + height + fillColor}>&nbsp;</div>
      )}
      {filledWidth.includes("40%") && (
        <div className={`rounded w-[40%] ` + height + fillColor}>&nbsp;</div>
      )}
      {filledWidth.includes("60%") && (
        <div className={`rounded w-[60%] ` + height + fillColor}>&nbsp;</div>
      )}
      {filledWidth.includes("80%") && (
        <div className={`rounded w-[80%] ` + height + fillColor}>&nbsp;</div>
      )}
      {filledWidth.includes("100%") && (
        <div className={`rounded w-[100%] ` + height + fillColor}>&nbsp;</div>
      )}
    </div>
  );
}
