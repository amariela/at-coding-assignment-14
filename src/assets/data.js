import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
    { id: "home", name: "home" },
    { id: "work", name: "work" },
    { id: "skills", name: "skills" },
    { id: "resources", name: "resources" },
    { id: "devSetup", name: "dev setup" },
];

export const ABOUT = [
    {
        id: "Contact",
        title: "I'm Aena!",
        text: "I'm passionate about good design - both in frontend and backend development. I also have an interest in information security and love to learn new technologies. Outside of development, I love to read and listen to music! Feel free to reach out below.",
        email: "ateodocio@academic.rrc.ca",
    }
];

export const WORKS = [
    {
        id: 1,
        title: "React App in Docker",
        description: "A React app in a dev environment hosted on a Docker Container.",
        imgSrc: project1,
        link: "https://github.com/amariela/at-coding-assignment-11",
        techList: "React, JavaScript, HTML, CSS, Docker",
    },
    {
        id: 2,
        title: "Web Component Library",
        description: "A retry style component library built using React and Storybook with UI testing.",
        imgSrc: project2,
        link: "https://github.com/amariela/at-coding-assignment-12",
        techList: "React, TypeScript, HTML, StoryBook, Jest, Docker",
    },
    {
        id: 3,
        title: "React App with CI/CD Pipeline",
        description: "A react app built to showcase an automated pipeline using git hooks, formatting and testing.",
        imgSrc: project3,
        link: "https://github.com/amariela/at-coding-assignment-13",
        techList: "React, TypeScript, StoryBook, Jest, Docker, Husky, ESLint, Prettier, GitHub Actions",
    }
];

export const SKILLS = [
    {
        id: "Backend Development",
        detail: "Experienced in building scalable and secure backend systems with authentication, database management, and API integrations.",
        tools: "Java, Spring, PHP, Ruby on Rails, PostgreSQL, MySQL, Supabase",
    },
    {
        id: "Frontend Development",
        detail: "Passionate about creating intuitive, responsive, and visually appealing user interfaces with modern frameworks and libraries.",
        tools: "React.js, Next.js, JavaScript, TypeScript, Bootstrap, HTML, CSS",
    },
    {
        id: "Testing, Deployment, and Automation",
        detail: "Familiar with testing, continuous integration, and deployment strategies for web applications.",
        tools: "Jest, Cypress, ESLint, JUnit, Husky, Docker, GitHub Actions, Vercel, Supabase",
    },
    {
        id: "Soft Skills",
        detail: "Strong communication and collaboration skills, with experience in technical planning, content creation, and troubleshooting technical issues.",
        tools: "Agile Methodologies, Git, Documentation, Team Collaboration, Project Management, Problem-Solving",
    }
];

export const RESOURCES = [
    {
        id: 1,
        title: "The Unicorn Project",
        summary: "This fictional book was written by Gene Kim. I learned about real-life DevOps problems in a large business context. The book explores the challenges faced by IT teams in the real world and emphasizes the importance of collaboration, leadership, and continuous improvement. It also offers insights into modern DevOps practices and the need for a cultural shift in organizations to achieve high performance.",
        imgSrc: project4,
        link: "https://itrevolution.com/product/the-unicorn-project/",
    },
    {
        id: 2,
        title: "Red River College",
        summary: "Received an extensive education in Full Stack Web Development. The program provided a comprehensive understanding of both front-end and back-end technologies, including JavaScript, React, Node.js, and databases. The hands-on projects allowed me to apply what I learned in real-world scenarios, preparing me for the challenges of a full-stack development role.",
        imgSrc: project5,
        link: "https://www.rrc.ca/",
    },
    {
        id: 3,
        title: "The Odin Project",
        summary: "Mastered HTML, CSS, and JavaScript from their open-sourced curriculum. The Odin Project is a fantastic resource for self-learners, offering a structured path that covers web development fundamentals and advanced topics. It also emphasizes building projects along the way, which helped solidify my skills and gave me practical experience in full-stack development.",
        imgSrc: project6,
        link: "https://www.theodinproject.com/",
    },
];


export const DEVSETUPS = [
    {
        id: 1,
        title: "Visual Studio Code Setup",
        detail: "I use Visual Studio Code with extensions like Prettier, ESLint, and GitLens to improve productivity and maintain clean code.",
    },
    {
        id: 2,
        title: "Terminal Setup",
        detail: "I use the Zsh terminal with a custom prompt and utilities like Git and Node.js to streamline my development workflow.",
    },
    {
        id: 3,
        title: "Preferred Editor Font",
        detail: "I prefer using the 'Fira Code' font in Visual Studio Code for its clean design and programming ligatures that enhance readability.",
    },
];
