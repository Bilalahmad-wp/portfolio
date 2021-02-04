
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Bilal Ahmad",
  title: "Hi all, I'm Bilal",
  subTitle: emoji("A passionate web developer 🚀 having an experience of building Web Applications with JavaScript, jquerry , HTML , CSS and Bootstrap."),
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Bilalahmad-wp",
  linkedin: "https://www.linkedin.com/in/bilal-ahmad-998ab2204/",
  gmail: "bilalahmadqureshi76@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100041479186751",
  instagram: "",
  
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "WEB DEVELOPER WHO WANTS TO EXPLORE EVERY NEW TECHNOLOGY",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your Web Applications."),
    emoji("⚡ Develop Website through Elementor builder."),
    emoji("⚡ Develop Website through Divi builder."),
    emoji("⚡ Develop Website through Avada builder."),
    emoji("⚡ Convert html code to website through ACF."),
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Elementor",
      fontAwesomeClassname: "fab fa-elementor" 
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
   
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: 'laravel',
      fontAwesomeClassname: "fas fa-laravel"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Android",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web developer",   
      company: "Dextercodes",
      companylogo: require("./assets/images/dexter.jpg"),
      date: "Nov 2020 – Present",
      desc: "Web developer using HTML, CSS for Front-End and JQUERRY for Back-End Development"
    },
    
    {
      role: "Android Developer",  
      company: "Tech developer",
      companylogo:  require("./assets/images/t4sol.png"),
      date: "September 2019 – December 2019",
      desc: "Android Developer using Java and XML"
    },   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/appicon.png"),
      link: "https://play.google.com/store/apps/details?id=com.t4s.apl"
    },
    {
      image: require("./assets/images/vsc.png"),
      link: "https://vitalitysolutioncenter.com/"
    },
    {
      image: require("./assets/images/alhaq.jpg"),
      link: "http://alhaq.world/"
    },
  ]
};

const projects = {
  title: "Mini Projects",
  subtitle: "Small Projects for Learning",
  projects: [
    {
      // image: require("./assets/images/covd.png"),
      name: 'Project 1',
      link: "http://aliraza-covid-19.surge.sh/"
    },
    {
      name: 'Project 2',
      link: "http://aliraza-type-quiz.surge.sh/"
    },
    {
      name: 'Project 3',
      link: "http://aliraza-personalexpanse.surge.sh/"
    },
  ]
};

// Talks Sections

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3185537459",
  email_address: "bilalahmadqureshi76@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, projects ,contactInfo };
