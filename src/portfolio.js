/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Junzhe Zhao",
  logo_name: "Junzhe Zhao",
  nickname: "Edward Zhao",
  subTitle: `An intelligent, agile and inexhaustible developer fully experienced in all  types of Web developing.
    Also fairly researched on Deep Learning and Neural Network.`,
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/edward1zhao",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/junzhe-zhao/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zhaojunzhe0305@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Front-end Web",
      fileName: "FullStackImg",
      skills: [
        "⚡ Fully experienced in React-Redux, Vue.js",
        "⚡ Almost fully experienced in Angular, Bootstrap",
        "⚡ Possessed Javascript, HTML5, CSS3, Scss, Sass as basics",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#FF2F26",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#609",
          },
        },
      ],
    },
    {
      title: "Back-end Web",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Most preferable Back end framework is Django",
        "⚡ Java Spring framework is also preferred",
        "⚡ PHP base framework like Laravel, CodeIgniter",
        "⚡ Flexible use of MySQL and MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#11AA11",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "CodeIgniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#111111",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF0000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Deep Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Much familiar with all versions of TensorFlow",
        "⚡ Developing AI project using Python and Neural Network",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/certificates/c4e1916f5552",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalian University of Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "dalian_uni",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Web Development.",
      ],
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Web developer",
          company: "Huiheng Software Development Co Ltd",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "mei",
          duration: "May 2019—Present",
          location: "Pune, Maharashtra",
          description:
            "Completely experienced in Frontend Web developing. Promoted to Senior Frontend Web Developer level. Focused on Web developing especially into Frontend",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "MEIDI Technology Development Co Ltd",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "mei",
          duration: "February 2018—April 2019",
          location: "Dalian, China",
          description:
            "nvolved with Complied Languages like Java, C++, C#. Kept working with Interpreted Languages like Python, Javascript. Enhanced basis knowledge of Software Engineering",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development and AI Intern",
          company: "Meidi Software Development Co Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "mei",
          duration: "May 2016—December 2017",
          location: "Dalian, China",
          description:
            "Studied Web developing.  Mainly, interested in Deep Learning. And Learned key skills for working in a big project",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "IMG_0022.JPG",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Xigang District, Dalian, Dalian, Liaoning, China",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/38%C2%B055'30.8%22N+121%C2%B037'18.8%22E/@38.9252252,121.621953,20.22z/data=!4m5!3m4!1s0x0:0x0!8m2!3d38.92522!4d121.6219589",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
