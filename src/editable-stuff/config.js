// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dylan",
  middleName: "",
  lastName: "Nguyen",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nct74",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nct.74/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/congthanhh__",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/congthanhh/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/Dylan_Nguyen/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/Dylan_Nguyen.jpg"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Dylan_Nguyen.jpg"),
  imageSize: 375,
  message:
    "I am Thanh (Dylan) Nguyen. I graduated from HCMC University of Technology in Vietnam with a bachelor's degree in computer engineering. I'm known for my friendly demeanor, open-mindedness, and ability to connect. I am good in English communication and presentation, effective at teamwork, and have high organizational capabilities.",
  // message:
  //   "My name is Dylan Nguyen. I’m a graduate of 2023 from HCMC University of Technology at VietNam with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1S5qZYOA_Fk8woa_3c3EF3jtM0EG40pes/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "nct74", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["FaceRecognition", "Restaurant_Service", "Introduce_Company", "smart-home"],
};
// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Dylan_Nguyen.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Dylan_Nguyen.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "C/C++", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "SQL", value: 85 },
    { name: "Algorithm", value: 80 },
    { name: "HTML/CSS", value: 65 },
  ],
  softSkills: [
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 95 },
    { name: "Collaboration", value: 90 },
    { name: "Goal-Oriented", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Problem Solving", value: 85 },
    { name: "Creativity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nct.231101@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Junior Software Engineer - ERP Consultant',
      companylogo: require('../assets/img/pcv_logo.png'),
      date: 'Oct 2023 – Present',
    },
    {
      role: 'Software Engineer - ERP Consultant',
      companylogo: require('../assets/img/novobi.jpg'),
      date: 'June 2022 – Oct 2023',
    },
    // {
    //   role: 'Teaching Assistant',
    //   companylogo: require('../assets/img/becodeching.jpg'),
    //   date: 'Feb 2020 – Feb 2023',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
