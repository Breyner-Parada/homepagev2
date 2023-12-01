import { appxcale, quepar, self_employed, utd } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Freelancer",
    company_name: "Self-employed",
    icon: self_employed,
    iconBg: "#383E56",
    date: "Oct 2021 - Sep 2022",
    points: [
      "Doing research and identifying new opportunities and potential new markets.",
      "Learning and making use of new technologies",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "In continuous learning and improvement of my skills and knowledge in the area of ​​web development and mobile development.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Un Toque Digital",
    icon: utd,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Oct 2022",
    points: [
      "Connect the application with the database through the API and WebSockets.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Build reusable code and libraries for future use.",
      "Build and maintain high performance, reusable, and reliable code.",
      "Build microservices using Node.js and Express.js.",
    ],
  },
  {
    title: "Web Developer and Mobile Developer",
    company_name: "appXcale",
    icon: appxcale,
    iconBg: "#383E56",
    date: "Oct 2022 - Mar 2023",
    points: [
      "Developing and maintaining web applications and mobile apps using NextJs, React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Build and maintain high performance, reusable, and reliable code.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "QuePar Solutions",
    icon: quepar,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, NextJs and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Build and maintain high performance, reusable, and reliable code.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "TODO App",
    description:
      "Make your tasks easier, add tasks, check them and when the tasks are done if you want, just delete them and make more.",
    source_code_link: "https://github.com/Breyner-Parada/reactjs",
    live_link: "https://breyner-parada.github.io/reactjs",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Movie App",
    description:
      'Find information of your favorite movies, see and search what movies are trending daily, make with The MovieDB API.',
      source_code_link: "https://github.com/Breyner-Parada/movieapp",
      live_link: 'https://breyner-parada.github.io/movieapp'
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Chat App",
    description:
      "Create a room and start chatting with your friends in this simple web chat app",
      source_code_link: "https://github.com/Breyner-Parada/chatapp",
      live_link: 'https://youwannatalk.netlify.app'
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "FlashBack App",
    description:
      "Create, edit, delete, share, like and comment your own memories and comment, like others memories in this mini social media.",
      source_code_link: "https://github.com/Breyner-Parada/flashback",
      live_link: 'https://breyner-parada.github.io/flashback'
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Toc Toc App",
    description:
      "Social media TikTok clone sign up and share, comment, search and like videos from others",
      source_code_link: "https://github.com/Breyner-Parada/toctoc",
      live_link: 'https://toctoc-ten.vercel.app/'
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Dashboard App",
    description:
      "A template admin dashboard using syncfusion as main charts components",
      source_code_link: "https://github.com/Breyner-Parada/dashboard",
      live_link: 'https://my-tablero.netlify.app/'
  },
];
