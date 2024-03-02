import ProjectImgJo from '../images/project-jotter.jpg'
import ProjectImgMl from '../images/project-ml.jpg'
import ProjectImgJb from '../images/project-jotboard.jpg'
import ProjectImgBc from '../images/project-blockchain.jpg'
import ProjectImgPh from '../images/project-photon.jpg'
import ProjectImgPf from '../images/project-portfolio.jpg'


const projectItems = [
  {
    name: "Pick A Movie - ML Cinematic Curation",
    img: ProjectImgMl,
    desc: "Built Movie Recommender using ML, Streamlit frontend, TMDB API data. Tailored suggestions with Cosine Similarity, Bag of Words, encompassing Bollywood. #ML #Streamlit #TMDBAPI",
    isLive: true,
    delayInStart: true,
    urlRepo: "https://github.com/subhajit-mallick/Pick-A-Movie",
    urlLive: "https://pick-a-movie-iopi.onrender.com/",
  },
  {
    name: "Vehicle OverSpeed Management Sys.",
    img: ProjectImgBc,
    desc: "Leveraging Blockchain with DFINITY's Motoko for smart contract development. Frontend built with Html-Css-Bootstrap, simulating Internet of Vehicles. Alerts nearby vehicles and Toll Nakas on over-speeding. #Blockchain #Difinity",
    isLive: false,
    urlRepo: "https://github.com/subhajit-mallick/VOMS",
    urlLive: "https://drive.google.com/file/d/1fDiI5AgQWq9JwuNEt333L1n0KBHBAwN4/view",
  },
  {
    name: "Jotter - A minimalist Todo list",
    img: ProjectImgJo,
    desc: "Jotter: Seamless Task Management & Note-Taking App. HTML, CSS, Bootstrap for Frontend, Node & MongoDB for Backend. Features Checklist, Google OAuth2, and Email/Password Sign-in for Enhanced User Experience",
    isLive: true,
    delayInStart: true,
    urlRepo: "https://github.com/subhajit-mallick/Jotter/",
    urlLive: "https://jotter-z7zo.onrender.com",
  },
  {
    name: "JotBoard - A beautiful React app",
    img: ProjectImgJb,
    desc: "Crafted a React-based note-taking site, akin to Google Keep. Streamlined UI for efficient organization. Hosted on Netlify for seamless accessibility. Elevate your note-taking experience effortlessly. #React #UI #NoteTaking #Netlify",
    isLive: true,
    urlRepo: "https://github.com/subhajit-mallick/JotBoard/",
    urlLive: "https://jotboard.netlify.app/",
  },
  {
    name: "Photon - A beautiful wallpaper app",
    img: ProjectImgPh,
    desc: "A Java-based Android Wallpaper App connecting local photographers with users. Features a beautiful UI and seamless Google Authentication for an enhanced user experience. #Java #Android #OAuth",
    isLive: true,
    urlRepo: "https://github.com/subhajit-mallick/Photon",
    urlLive: "https://play.google.com/store/apps/details?id=com.subhajit.photon&pcampaignid=web_share",
  },
  {
    name: "My React based Portfolio Website",
    img: ProjectImgPf,
    desc: "Built on React, this showcase highlights skills and projects. UI features include Lottie animation, Framer Motion, Formspree, and Material UI. Explore seamlessly for a technical dive into my work. #React #FramerMotion #MUI",
    isLive: true,
    urlRepo: "https://github.com/subhajit-mallick/PersonalPortfolioSite",
    urlLive: "https://subhajit.vercel.app/",
  },
]

export default projectItems;


// ###########################################

export const alertMsgForDelay = "This application is hosted on a free backend, and may require up to 30 seconds to become active. I apologize for any inconvenience this may cause.";

export const myAdjectives = [' Fresher', ' Web Developer', ' Software Engineer'];

export const aboutMe = "I am a 2023 Computer Science and Engineering graduate. I'm a tech enthusiast and quick learner, I'm deeply passionate about web development, especially within the MERN stack. With a diverse skill set spanning multiple programming languages and databases, I'm excited to explore new horizons in the world of technology. Additionally, I have a keen interest in UI/UX design, enhancing user experiences through intuitive interfaces. ";

export const cvLink = "https://drive.google.com/file/d/1CSw-RZY3732s-lhyo0b2VxQKsiHNeK3M/view?usp=sharing";

export const myQualification = [
  {
    title: "B.Tech (Computer Science & Engineering)",
    subtitle: "Kalyani Government Engineering College",
    chiptext: "CGPA: 9.53",
    time: "2023",
  },
  {
    title: "Diploma (Electric Engineering)",
    subtitle: "BPC Institute of Technology",
    chiptext: "OGPA: 8.83",
    time: "2020",
  },
  {
    title: "Higher Secondary (CISCE)",
    subtitle: "Krishnagar Academy",
    chiptext: "ISC-2017: 69.1 %",
    time: "2017",
  },
  {
    title: "Secondary (CISCE)",
    subtitle: "Krishnagar Academy",
    chiptext: "ICSE-2015: 79.8 %",
    time: "2015",
  }
];

//nested array = page
export const mySkills = [
  [
    {
      title: "C++, Java, Python, C#",
      subtitle: "Programming Language"
    },
    {
      title: "HTML, CSS, JavaScript, Bootstrap, React",
      subtitle: "Frontend"
    },
    {
      title: "MySQL, Oracle SQL, MongoDB",
      subtitle: "Backend"
    }
  ],
  [
    {
      title: "Node.js, Express, REST API",
      subtitle: "Frameworks & API"
    },
    {
      title: "Quick Learner, Curious",
      subtitle: "Soft SKills"
    },
  ],
];
