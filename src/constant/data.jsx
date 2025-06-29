import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiRedux } from 'react-icons/si';

export const NAME = "Deepak Goswami"
export const DESCRIPTION = "I'm a passionate Software Developer from Bengaluru"
export const HOME_DESIGNATION_DATA = "Software Developer"
export const DESIGNATION = "Software Developer"
export const ABOUT_SUMMARY = "Experienced Frontend Engineer with 4+ years of proven expertise in building scalable, performant, and user-friendly web applications. Specialized in React.js, TypeScript, Redux, Next.js, and modern UI libraries, I’ve successfully delivered products across CRM, content platforms, and marketing automation systems. I have a strong foundation in data structures and algorithms, and a passion for clean code, performance optimization, and collaborative problem-solving. I'm continuously learning and contributing to impactful digital experiences."

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
        imageLink: "/images/linkedin.svg"
    },
    {
        id: "leetcode",
        href: "https://leetcode.com/Deepak_goswami/",
        imageLink: "/images/code.svg"
    },
    {
        id: "github",
        href: "https://github.com/DeepakGoswami5",
        imageLink: "/images/github.svg"
    }
]
export const ABOUT_PAGE = {
    title: 'ABOUT',
    description: "LEARN MORE ABOUT ME"
}
export const RESUME_PAGE = {
    title: 'Work Experience',
    description: "What I have done so far"
}
export const PROJECTS_PAGE = {
    title: 'PROJECTS',
    description: "CHECK MY PROJECTS"
}
export const CONTACT_PAGE = {
    title: 'CONTACT',
    description: "CONTACT ME"
}
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
export const INTERESTS = ["PAINTING", "COOKING"]
export const CAROUSEL = [
    {
        title: "React.js",
        id: "react_js",
        rating: '70%'
    },
]

export const EDUCATION = [
    {
        title: "Bachelor of Technology",
        id: "b_tech",
        subTitle: 'Computer Science and Information Technology',
        description: "I hold a Bachelor of Technology degree from Symbiosis University of Applied Sciences, specialized in Computer Science and Information Technology. My academic journey provided me with a comprehensive understanding of key concepts in these fields, including programming, software development, and IT systems. Through coursework and hands-on projects, I've developed a strong foundation in problem-solving, coding, and technology integration. This education has prepared me to contribute effectively to dynamic and innovative technological environments."
    },
]

export const EXPERIENCE = [
    {
      title: "Software Development Engineer - I",
      id: "1",
      subTitle: 'Brick&Bolt',
      duration: 'Jun 2021 - Present',
      description: "Bengaluru, Karnataka, India",
      achievement: [
        "Maintained and enhanced the CRM, analytics, feedback, and content management platforms using React.js.",
        "Collaborated cross-functionally with design, product, and backend teams to deliver 20+ feature-rich dashboards.",
        "Led frontend contributions for public-facing portals during Hyderabad and Chennai office launches, resolving critical bugs overnight.",
        "Developed 20+ landing pages and reusable email templates to support high-conversion marketing campaigns."
      ]
    },
    {
      title: "Programmer Analyst Trainee",
      id: "2",
      subTitle: 'Quantum Phinance',
      duration: 'Aug 2020 - May 2021',
      description: "Mumbai, Maharashtra, India",
      achievement: [
        "Built core modules for NBFC loan management system including EMI calculation, compliance, and reporting automation.",
      ]
    },
    {
      title: "Frontend Developer Intern",
      id: "3",
      subTitle: 'JamaWealth.com',
      duration: 'Jan 2020 - Jul 2020',
      description: "Hyderabad, Telangana, India",
      achievement: [
        "Revamped UI/UX for the wealth management dashboard, significantly improving user engagement.",
        "Developed over 50+ responsive screens using Bootstrap and JavaScript."
      ]
    },
  ]
  
export const CONTACT_ME = [
    {
        title: "My Address",
        id: "my_address",
        details: 'Indore, MP, India'
    },
    // {
    //     title: "Social Profiles",
    //     id: "social_profiles",
    //     details: 'Indore, MP, India'
    // },
    {
        title: "Email Me",
        id: "email_me",
        details: 'deepakgoswami0525@gmail.com'
    },
    // {
    //     title: "Call Me",
    //     id: "call_me",
    //     details: '+91 968-5555-755'
    // },
]