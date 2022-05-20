import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headings: {
    fname: {
      label: "First Name",
      value: "",
      isRequired: true,
      default: "Rahul",
    },
    lname: {
      label: "Last Name",
      value: "",
      isRequired: true,
      default: "Reddy",
    },
    profession: {
      label: "Profession",
      value: "",
      isRequired: true,
      default: "Software Architect",
    },
    street_address: {
      label: "Street Address",
      value: "",
      isRequired: true,
      default: "123 Main St",
    },
    city: {
      label: "City",
      value: "",
      isRequired: true,
      default: "San Francisco",
    },
    state: {
      label: "State",
      value: "",
      isRequired: true,
      default: "CA",
    },
    zipcode: {
      label: "Zipcode",
      value: "",
      isRequired: true,
      default: 94107,
    },
    phone: {
      label: "Phone",
      value: "",
      isRequired: true,
      default: 1234567890,
    },
    email: {
      label: "Email",
      value: "",
      isRequired: true,
      default: "rahul.mso@outlook.com",
    },
    website: {
      label: "Website",
      value: "",
      isRequired: true,
      default: "https://www.rahuldev.in",
    },
    objective: {
      label: "Objective",
      value: "",
      isRequired: true,
      default:
        "A Professional with a strong learning mindset having extensive experience in Design, Develop and Deployment of Full Stack applications.",
    },
  },
  education: {
    schema: {
      school: {
        label: "School Name",
        isRequired: true,
      },
      location: {
        label: "School Location",
        isRequired: true,
      },
      start_year: {
        label: "Start Year",
        isRequired: true,
      },
      start_month: {
        label: "Start Month",
        isRequired: true,
      },
      end_year: {
        label: "End Year",
        isRequired: true,
      },
      end_month: {
        label: "End Month",
        isRequired: true,
      },
      degree: {
        label: "Degree",
        isRequired: true,
      },
      major: {
        label: "Field of Study",
        isRequired: true,
      },
      percentage: {
        label: "Percentage",
        isRequired: true,
      },
    },
    sample_data: [
      {
        school: "University of California, Berkeley",
        location: "Berkeley, CA",
        start_year: 2019,
        start_month: "Jan",
        end_year: 2020,
        end_month: "Jan",
        degree: "Bachelor of Science",
        major: "Computer Science",
        percentage: 75,
      },
      {
        school: "University of California, Berkeley",
        location: "Berkeley, CA",
        start_year: 2016,
        start_month: "Jan",
        end_year: 2019,
        end_month: "Jan",
        degree: "Bachelor of Science",
        major: "Computer Science",
        percentage: 75,
      },
      {
        school: "University of California, Berkeley",
        location: "Berkeley, CA",
        start_year: 2013,
        start_month: "Jan",
        end_year: 2016,
        end_month: "Jan",
        degree: "Bachelor of Science",
        major: "Computer Science",
        percentage: 75,
      },
    ],
    data: [],
  },
  skills: {
    schema: {
      skill: {
        label: "Skill",
        isRequired: true,
      },
    },
    sample_data: [
      {
        skill: "JavaScript",
        rating: 3,
      },
      {
        skill: "Python",
        rating: 4,
      },
      {
        skill: "Kubernetes",
        rating: 5,
      },
      {
        skill: "Azure Administration",
        rating: 3,
      },
      {
        skill: "Docker",
        rating: 1,
      },
      {
        skill: "JavaScript",
        rating: 3,
      },
      {
        skill: "Python",
        rating: 4,
      },
      {
        skill: "Kubernetes",
        rating: 5,
      },
      {
        skill: "Azure Administration",
        rating: 3,
      },
      {
        skill: "Docker",
        rating: 1,
      },
      {
        skill: "JavaScript",
        rating: 3,
      },
      {
        skill: "Python",
        rating: 4,
      },
      {
        skill: "Kubernetes",
        rating: 5,
      },
      {
        skill: "Azure Administration",
        rating: 3,
      },
      {
        skill: "Docker",
        rating: 1,
      },
    ],
    data: [],
  },
  summary: {
    label: "Experience Summary",
    value: "",
    isRequired: true,
    default:
      "<ul>   <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> </ul>",
  },
  experience: {
    schema: {
      company: {
        label: "Company Name",
        isRequired: true,
      },
      role: {
        label: "Role",
        isRequired: true,
      },
      start_year: {
        label: "Start Year",
        isRequired: true,
      },
      start_month: {
        label: "Start Month",
        isRequired: true,
      },
      end_year: {
        label: "End Year",
        isRequired: true,
      },
      end_month: {
        label: "End Month",
        isRequired: true,
      },
      description: {
        label: "Description",
        isRequired: true,
      },
    },
    sample_data: [
      {
        company: "Company 1",
        role: "Software Architect",
        start_year: 2019,
        start_month: "Jan",
        end_year: 2020,
        end_month: "Jan",
        description:
          "<ul> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li><em><strong>Developed an application for Opensource developers.</strong></em></li> </ul>",
      },
      {
        company: "Company 2",
        role: "Software Engineer",
        start_year: 2016,
        start_month: "Jan",
        end_year: 2019,
        end_month: "Jan",
        description:
          "<ul> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li><em><strong>Developed an application for Opensource developers.</strong></em></li> </ul>",
      },
      {
        company: "Company 3",
        role: "Software Engineer",
        start_year: 2013,
        start_month: "Jan",
        end_year: 2016,
        end_month: "Jan",
        description:
          "<ul> <li>Developed Backend for Youtube</li><li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li>  <li><em><strong>Developed an application for Opensource developers.</strong></em></li> </ul>",
      },
    ],
    data: [],
  },
};

const updateHeadingAction = (state, action) => {
  if (action.type in state.headings && action.payload.value.trim().length > 0) {
    state.headings[action.type].value = action.payload.value;
  }
};

// payload(value)
const updateSummaryAction = (state, action) => {
  if (action.payload.value.trim().length > 0) {
    state.summary.value = action.payload.value;
  }
};

// skills - payload(value, rating)
const addNewSkillAction = (state, action) => {
  if (
    action.payload.value.trim().length > 0 &&
    action.payload.rating > 0 &&
    action.payload.rating <= 5
  ) {
    state.skills.data.push(action.payload);
  }
};

const updateSkillAction = (state, action) => {
  if (
    action.payload.index < state.skills.data.length &&
    action.payload.skill.value.trim().length > 0 &&
    action.payload.skill.rating > 0 &&
    action.payload.skill.rating <= 5
  ) {
    state.skills.data[action.payload.index] = action.payload.skill;
  }
};

const deleteSkillAction = (state, action) => {
  if (action.payload.index < state.skills.data.length) {
    state.skills.data.splice(action.payload.index, 1);
  }
};

// education
const addNewEducationAction = (state, action) => {
  // TODO add validations for start_year, start_month, end_year, end_month
  if (
    action.payload.school.trim().length > 0 &&
    action.payload.location.trim().length > 0 &&
    action.payload.degree.trim().length > 0 &&
    action.payload.major.trim().length > 0 &&
    action.payload.percentage > 0 &&
    action.payload.percentage <= 100
  ) {
    state.education.data.push(action.payload);
  }
};

const updateEducationAction = (state, action) => {
  // TODO add validations for start_year, start_month, end_year, end_month
  if (
    action.payload.index < state.education.data.length &&
    action.payload.education.school.trim().length > 0 &&
    action.payload.education.location.trim().length > 0 &&
    action.payload.education.degree.trim().length > 0 &&
    action.payload.education.major.trim().length > 0 &&
    action.payload.education.percentage > 0 &&
    action.payload.education.percentage <= 100
  ) {
    state.education.data[action.payload.index] = action.payload.education;
  }
};

const deleteEducationAction = (state, action) => {
  if (action.payload.index < state.education.data.length) {
    state.education.data.splice(action.payload.index, 1);
  }
};

// experience
const addNewExperienceAction = (state, action) => {
  // TODO add validations for start_year, start_month, end_year, end_month
  if (
    action.payload.company.trim().length > 0 &&
    action.payload.role.trim().length > 0 &&
    action.payload.description.trim().length > 0
  ) {
    state.experience.data.push(action.payload);
  }
};

const updateExperienceAction = (state, action) => {
  // TODO add validations for start_year, start_month, end_year, end_month
  if (
    action.payload.index < state.experience.data.length &&
    action.payload.experience.company.trim().length > 0 &&
    action.payload.experience.role.trim().length > 0 &&
    action.payload.experience.description.trim().length > 0
  ) {
    state.experience.data[action.payload.index] = action.payload.experience;
  }
};

const deleteExperienceAction = (state, action) => {
  if (action.payload.index < state.experience.data.length) {
    state.experience.data.splice(action.payload.index, 1);
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateHeading: updateHeadingAction,
    updateSummary: updateSummaryAction,
    // education
    addEducation: addNewEducationAction,
    updateEducation: updateEducationAction,
    deleteEducation: deleteEducationAction,
    // skills
    addSkill: addNewSkillAction,
    updateSkill: updateSkillAction,
    deleteSkill: deleteSkillAction,
    // experience
    addExperience: addNewExperienceAction,
    updateExperience: updateExperienceAction,
    deleteExperience: deleteExperienceAction,
  },
});

export const {
  updateHeading,
  updateSummary,
  addEducation,
  updateEducation,
  deleteEducation,
  addSkill,
  updateSkill,
  deleteSkill,
  addExperience,
  updateExperience,
  deleteExperience,
} = userSlice.actions;

export default userSlice.reducer;
