import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codechefIcon,
  gfgIcon,
  leetcodeIcon,
  codeforcesIcon,
  dsa,
  flavourverseImage,
  eventlyImage,
  ristoranteImage,
  promptopiaImage,
  netflixCloneImage,
  aiInterviewMockerImage,
  virtualLabImage

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Algo Expert",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student Placement Representative",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Dsa",
  //   icon: dsa,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },

];

const experiences = [
  {
    title: "GeeksforGeeks Contributor",
    platform_name: "GeeksforGeeks",
    icon: gfgIcon, // Replace with the GeeksforGeeks icon
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Ranked 40 in one weekly contest, showcasing strong problem-solving skills.",
      "Currently at the top of my institute's rankboard, demonstrating consistent performance.",
      "Maintained a current streak of 380 days, highlighting dedication and persistence.",
      "Solved numerous coding problems, contributing to a strong understanding of data structures and algorithms.",
      "Engaged with the community through discussions and problem-solving sessions.",
    ],
    profileLink: "https://www.geeksforgeeks.org/user/mayank6oqq/"
  },
  {
    title: "LeetCode Problem Solver",
    platform_name: "LeetCode",
    icon: leetcodeIcon, // Replace with the LeetCode icon
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Solved over 500 problems, showcasing proficiency in a wide range of coding challenges.",
      "Participated in weekly contests to sharpen problem-solving skills under time constraints.",
      "Consistently ranked among the top participants, demonstrating a competitive edge.",
    ],
    profileLink: "https://leetcode.com/u/mayankag12/"
  },
  {
    title: "Codeforces Competitor",
    platform_name: "Codeforces",
    icon: codeforcesIcon, // Replace with the Codeforces icon
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Competed in various coding contests, earning a solid rating and gaining valuable competitive programming experience.",
      "Specialized in solving complex algorithmic problems, with a focus on optimization and efficiency.",
      "Engaged with the community through blog posts and problem discussions.",
    ],
    profileLink: "https://codeforces.com/profile/mayank-ag"
  },
  {
    title: "CodeChef Enthusiast",
    platform_name: "CodeChef",
    icon: codechefIcon, // Replace with the CodeChef icon
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Participated in long and short contests, consistently performing well and improving ratings.",
      "Solved a wide array of problems, enhancing skills in various domains of computer science.",
      "Contributed to the community by providing insights and solutions in the discussion forums.",
    ],
    profileLink: "https://www.codechef.com/users/mayankag00"
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FlavourVerse",
    description:
      "A recipe app built using React that displays various recipes, offers search functionality, detailed recipes, and recommends other recipes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flavourverseImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/FlavourVerse-Recipe-App",
  },
  {
    name: "Evently",
    description:
      "An event app using Next.js with login functionality using Clerk, allowing users to search for events, buy tickets, and view profiles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: eventlyImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/Evently",
  },
  {
    name: "Ristorante-Con-Fusion",
    description:
      "A responsive restaurant website using Bootstrap, including functionalities for reserving tables, an interactive menu, an about section, and a contact section.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ristoranteImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/Ristorante-Con-Fusion",
  },
  {
    name: "Promptopia",
    description:
      "A prompt app using Next.js that displays various prompts for generating relevant AI chatbot responses, featuring search functionality and user management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "google-auth",
        color: "pink-text-gradient",
      },
    ],
    image: promptopiaImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/Promptopia1",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone app featuring a user interface similar to Netflix, with short movies, descriptions, and a watch later feature.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "google-auth",
        color: "pink-text-gradient",
      },
    ],
    image: netflixCloneImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/netflix-clone",
  },
  {
    name: "AI Interview Mocker",
    description:
      "An online interview platform for users to prepare for technical interviews by getting questions based on job roles and experience, with functionality to record answers and receive feedback.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "drizzle",
        color: "green-text-gradient",
      },
      {
        name: "gemini api",
        color: "pink-text-gradient",
      },
    ],
    image: aiInterviewMockerImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/AI-interview-Platform",
  },
  {
    name: "Virtual Lab",
    description:
      "A virtual lab platform using Node.js, JavaScript, EJS, and Express, featuring a file structure with routes, views, and public assets.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: virtualLabImage, // replace with actual image
    source_code_link: "https://github.com/mayank1803/Virtual-Lab",
  },
];


export { services, technologies, experiences, testimonials, projects };
