import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiRedux } from "react-icons/si";

// Personal Information
export const NAME = "Deepak Goswami";
export const DESCRIPTION = "I'm a passionate Software Developer from Bengaluru";
export const HOME_DESIGNATION_DATA = "Software Developer";
export const DESIGNATION = "Senior Software Engineer";
export const ABOUT_SUMMARY = `Experienced Frontend Engineer with 4+ years of proven expertise in building scalable, 
performant, and user-friendly web applications. Specialized in React.js, TypeScript, Redux, Next.js, and modern UI 
libraries, I've successfully delivered products across CRM, content platforms, and marketing automation systems. 
I have a strong foundation in data structures and algorithms, and a passion for clean code, performance optimization, 
and collaborative problem-solving. I'm continuously learning and contributing to impactful digital experiences.`;

// SEO and Metadata
export const SEO_DATA = {
  siteName: "Deepak Goswami Portfolio",
  siteUrl: "https://deepakgoswami5.github.io",
  description:
    "Senior Software Engineer specializing in React, Next.js, and modern web technologies",
  keywords: [
    "Senior Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Engineer",
  ],
  author: "Deepak Goswami",
  twitterHandle: "@deepakgoswami",
};

// Tab list for menu + routing
export const TABS = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Work Experience", id: "work" },
  { title: "Contact", id: "contact" },
];

export const SOCIAL_MEDIA = [
  // {
  //     id: "twitters",
  //     href: "",
  //     imageLink: "/images/twitter.svg"
  // },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/deepak-goswami-9a4660131/",
    imageLink: "/images/linkedin.svg",
  },
  {
    id: "leetcode",
    href: "https://leetcode.com/Deepak_goswami/",
    imageLink: "/images/code.svg",
  },
  {
    id: "github",
    href: "https://github.com/DeepakGoswami5",
    imageLink: "/images/github.svg",
  },
];
export const ABOUT_PAGE = {
  title: "ABOUT",
  description: "LEARN MORE ABOUT ME",
};
export const RESUME_PAGE = {
  title: "Work Experience",
  description: "What I have done so far",
};
export const PROJECTS_PAGE = {
  title: "PROJECTS",
  description: "CHECK MY PROJECTS",
};
export const CONTACT_PAGE = {
  title: "CONTACT",
  description: "CONTACT ME",
};
export const SKILLS = [
  { name: "React.js", level: 90, icon: FaReact },
  { name: "Next.js", level: 85, icon: SiNextdotjs },
  { name: "Redux.js", level: 80, icon: SiRedux },
  { name: "JavaScript", level: 95, icon: FaJs },
  { name: "HTML", level: 95, icon: FaHtml5 },
  { name: "CSS", level: 90, icon: FaCss3Alt },
  { name: "Python", level: 60, icon: FaPython }, // Optional, if relevant in role
  { name: "Git", level: 80, icon: FaGitAlt },
];
export const INTERESTS = ["PAINTING", "COOKING"];
export const CAROUSEL = [
  {
    title: "React.js",
    id: "react_js",
    rating: "70%",
  },
];

export const EDUCATION = [
  {
    title: "Bachelor of Technology",
    id: "b_tech",
    subTitle: "Computer Science and Information Technology",
    description:
      "I hold a Bachelor of Technology degree from Symbiosis University of Applied Sciences, specialized in Computer Science and Information Technology. My academic journey provided me with a comprehensive understanding of key concepts in these fields, including programming, software development, and IT systems. Through coursework and hands-on projects, I've developed a strong foundation in problem-solving, coding, and technology integration. This education has prepared me to contribute effectively to dynamic and innovative technological environments.",
  },
];

export const EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    id: "4",
    subTitle: "Zed Mobility - Al Ghurair Investment",
    duration: "Sept 2023 – Present",
    description: "UAE (Remote)",
    achievement: [
      "Spearheaded the end-to-end development of an internal Admin Portal to monitor and optimize 8,000+ rides across Dubai with real-time analytics and operational insights.",
      "Built and maintained a Supplier Portal enabling vendors to manage drivers, vehicles, and ride data—streamlining fleet coordination and visibility.",
      "Engineered a scalable Bulk Upload Feature using Node.js and AWS Lambda, processing thousands of users and GBs of documents, improving efficiency by 40% and reducing costs by 30%.",
      "Developed advanced data visualizations using Deck.gl, Leaflet, and Google Maps to deliver interactive heatmaps, traffic overlays, and ride analytics.",
      "Enhanced system reliability with UI-level fail-safes, fallback messages, error boundaries, and structured logging for faster issue resolution.",
    ],
  },
  {
    title: "Software Development Engineer - I",
    id: "1",
    subTitle: "Brick&Bolt",
    duration: "Jun 2021 – Sept 2023",
    description: "Bengaluru, Karnataka, India",
    achievement: [
      "Led the development of a robust CRM, analytics dashboard, feedback system, and content management portal using React.js—reducing customer response time by 50%.",
      "Collaborated cross-functionally to deliver 20+ feature-rich dashboards with dynamic data visualization and real-time insights.",
      "Led frontend initiatives for public-facing portals during city launches (Hyderabad and Chennai), resolving critical issues under tight deadlines.",
      "Created 20+ optimized landing pages and reusable email templates to drive marketing performance and conversion rates.",
      "Boosted performance by 80% through lazy loading, removal of unused assets, main-thread optimizations, and PageSpeed Insight recommendations.",
    ],
  },
  {
    title: "Programmer Analyst Trainee",
    id: "2",
    subTitle: "Quantum Phinance",
    duration: "Aug 2020 – May 2021",
    description: "Mumbai, Maharashtra, India",
    achievement: [
      "Built core modules for an NBFC loan management system including EMI calculation, compliance tracking, and automated reporting workflows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    id: "3",
    subTitle: "JamaWealth.com",
    duration: "Jan 2020 – Jul 2020",
    description: "Hyderabad, Telangana, India",
    achievement: [
      "Revamped the UI/UX of the wealth management dashboard, significantly increasing user engagement and retention.",
      "Developed 50+ responsive screens using Bootstrap and vanilla JavaScript, ensuring consistent performance across devices.",
    ],
  },
];

export const CONTACT_ME = [
  {
    title: "My Address",
    id: "my_address",
    details: "Indore, MP, India",
    icon: "📍",
  },
  {
    title: "Email Me",
    id: "email_me",
    details: "deepakgoswami0525@gmail.com",
    icon: "✉️",
    href: "mailto:deepakgoswami0525@gmail.com",
  },
];

// Utility Functions
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = phone => {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

export const formatDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Analytics helpers
export const trackPageView = page => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("config", "GA_MEASUREMENT_ID", { page_path: page });
  }
};

export const trackEvent = (action, category, label) => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", action, { event_category: category, event_label: label });
  }
};

// Default export for easier imports
export default {
  NAME,
  DESCRIPTION,
  DESIGNATION,
  ABOUT_SUMMARY,
  TABS,
  SOCIAL_MEDIA,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  CONTACT_ME,
  SEO_DATA,
};
