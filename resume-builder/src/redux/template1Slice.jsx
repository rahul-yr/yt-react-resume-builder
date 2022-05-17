import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  default: {
    user: {
      fname: "Rahul",
      lname: "Reddy",
      profession: "Software Engineer",
      street_address: "123 Main St",
      dob: "XX/XX/XXXX",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      phone: "123-456-7890",
      email: "rahul.mso@outlook.com",
    },
    objective:
      "A Professional with a strong learning mindset having extensive experience in Design, Develop and Deployment of Full Stack applications.",
    education: [
      {
        school: "University of California",
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
        school: "University of California",
        location: "Berkeley, CA",
        start_year: 2016,
        start_month: "Jan",
        end_year: 2019,
        end_month: "Jan",
        degree: "Bachelor of Science",
        major: "Computer Science",
        percentage: 75,
      },
    ],
    skills: [
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
    summary:
      "<ul><li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> <li>Configuring AWS EC2 instances, S3 buckets, Cloudfront, Lambda functions, Media Services and other AWS Services.</li> <li><em><strong>Experience in building Batch and Realtime Big Data Pipelines using Pyspark, SQL, ADF(Azure Data factory).</strong></em></li> </ul>",
    experience: [
      {
        company: "Company 1",
        role: "Software Architect",
        start_year: 2019,
        start_month: "Jan",
        end_year: 2020,
        end_month: "Jan",
        present: true,
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
          "<ul>  <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li>Developed Backend for Youtube</li> <li><em><strong>Developed an application for Opensource developers.</strong></em></li> </ul>",
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
    certifications: [
      {
        name: "AWS Certified Developer - Associate",
        link: "https://www.youracclaim.com/badges/c0e8f8f0-b9c7-4b8e-b8e8-f8f8f8f8f8f8/public_url",
      },
      {
        name: "AWS Certified Developer",
        link: "https://www.youracclaim.com/badges/c0e8f8f0-b9c7-4b8e-b8e8-f8f8f8f8f8f8/public_url",
      },
    ],
    links: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/rahul-reddy-m-s-o-b9b8b8b8/",
      },
      {
        name: "Github",
        link: "https://www.linkedin.com/in/rahul-reddy-m-s-o-b9b8b8b8/",
      },
    ],
  },
  validations: {
    user: {
      fname: {
        required: true,
        label: "First Name",
      },
      lname: {
        required: true,
        label: "Last Name",
      },
      profession: {
        required: true,
        label: "Profession",
      },
      dob: {
        required: false,
        label: "Date of Birth",
      },
      street_address: {
        required: false,
        label: "Street Address",
      },
      city: {
        required: false,
        label: "City",
      },
      state: {
        required: false,
        label: "State",
      },
      zip: {
        required: false,
        label: "Zip code",
      },
      phone: {
        required: true,
        label: "Phone",
      },
      email: {
        required: true,
        label: "Email",
      },
    },
    objective: {
      required: true,
      label: "Objective",
    },
    education: {
      school: {
        required: true,
        label: "School",
      },
      location: {
        required: true,
        label: "Location",
      },
      start_year: {
        required: true,
        label: "Start Year",
      },
      start_month: {
        required: true,
        label: "Start Month",
      },
      end_year: {
        required: true,
        label: "End Year",
      },
      end_month: {
        required: true,
        label: "End Month",
      },
      degree: {
        required: true,
        label: "Degree",
      },
      major: {
        required: true,
        label: "Major",
      },
      percentage: {
        required: true,
        label: "Percentage",
      },
    },
    skills: {
      skill: {
        required: true,
        label: "Skill",
      },
      rating: {
        required: true,
        label: "Rating",
      },
    },
    summary: {
      required: true,
      label: "Summary",
    },
    experience: {
      company: {
        required: true,
        label: "Company",
      },
      role: {
        required: true,
        label: "Role",
      },
      start_year: {
        required: true,
        label: "Start Year",
      },
      start_month: {
        required: true,
        label: "Start Month",
      },
      end_year: {
        required: true,
        label: "End Year",
      },
      end_month: {
        required: true,
        label: "End Month",
      },
      description: {
        required: true,
        label: "Description",
      },
      present: {
        required: false,
        label: "Present",
      },
    },
    certifications: {
      name: {
        required: true,
        label: "Name",
      },
      link: {
        required: true,
        label: "Link",
      },
    },
    links: {
      name: {
        required: true,
        label: "Name",
      },
      link: {
        required: true,
        label: "Link",
      },
    },
  },
  data: {
    user: {
      fname: "",
      lname: "",
      profession: "",
      dob: "",
      street_address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
    },
    objective: "",
    education: [],
    skills: [],
    summary: "",
    experience: [],
    certifications: [],
    links: [],
  },
};

const template1Slice = createSlice({
  name: "template1",
  initialState,
  reducers: {},
});

export default template1Slice.reducer;
