import booking from "../assets/projects/booking.jpg";
import fitwyse from "../assets/projects/fitwyse.jpg";
import dmas from "../assets/projects/dmas.jpg";
import qhse from "../assets/projects/qhse.jpg";
import portfolio from "../assets/projects/portfolio.jpg";





export const HERO_CONTENT = `I am a passionate frontend developer with a knack of crafting robust and scalable web applications with 1.3 years of hands-on experience inthe IT industry. Proven expertise in developing dynamic web-based applications and client/server applications using technologies such as .NET MVC Core,  Figma Tool, HTML5, CSS3, Bootstrap v5, Java Sript, ReactJS, JQ, Ajax and MariaDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and results-driven software engineer with a passion for creating innovative web-based applications. I thrive in collaborative environments and have a strong commitment to delivering projects on time and beyond expectations. Always eager to learn and grow, I am committed to continuous improvement and excellence in my work.Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
 
  {
    year: "Nov 2022 - Mar 2024 ",
    role: "Frontend Developer",
    company: "Avgira Technologies",
    description: `Designed and developed user interfaces for web applications using JavaScript, React.js.Supported with backend developers to integrate frontend components with .NET API's.Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "HTML", "CSS", ".NET MVC Core", ".NET API"],
  },
];

export const PROJECTS = [
  {
    title: "FITWYSE",
    image: fitwyse,
    description:
      " Fitwyse is a health and wellness application designed to provide users with a holistic health experience.Comprehensive health tracking covers Vitals, Nutrition, Activity, Cycle, Sleep, Menstrual Cycle, PCODs, Workout Schedules, Body Measurements, Journals, and Heart points for a holistic health experience.",
    technologies: ["HTML", "CSS", "BootstrapV4"],
  },
  {
    title: "QHSE Management System",
    image: qhse,
    description:
      " Risk Monitoring - Stay informed about risks related to your ESG objectives.Reporting and Management - Enable swift reporting of identified risks for prompt corrective actions by ESG stakeholders. Status Tracking - Keep updated on the current status of each risk to ensure consistent management and compliance.",
    technologies: ["HTML", "CSS", "BootstrapV4","Javascript", ".NET MVC", "MariaDB 11.0"],
  },
  {
    title: "Digital Maturity Assessment System",
    image: dmas,
    description:
      "Developed a Digital Maturity Assessment System that monitors digital maturity levels in ministries, offering insights into progress and proximity to digitalization goals.",
    technologies: ["HTML", "CSS", "BootstrapV4","Javascript", ".NET MVC","MariaDB 11.0"],
  },
  {
    title: "Reservation App",
    image: booking,
    description:
      "The Booking.com website serves as a comprehensive platform for users to discover, compare, and book accommodations worldwide. It offers a user-friendly interface where travelers can explore a diverse range of options including hotels, apartments, vacation rentals, and more.",
    technologies:  ["HTML", "CSS", "React", "Bootstrap","Javascript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Javascript"],
  },
];

export const CONTACT = {
  phoneNo: "+91 9159395828 ",
  email: "rdevananth19@gmail.com",
};
