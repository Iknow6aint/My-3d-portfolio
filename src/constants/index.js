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

    tripguide,
    threejs,
    uberx,
    mem,
    edo,
    sabi,
    telus,
    fiver,
    foodie
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
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
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },

    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Backend  Developer",
        company_name: "Edo inovates",
        icon: edo,
        iconBg: "#383E56",
        date: "November 2021 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Fullstack  Developer (Backend)",
        company_name: " Freelance",
        icon: fiver,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Collaborating with cross-functional teams to design and implement good daabse and archtecture for the backend",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Sabi",
        icon: sabi,
        iconBg: "#383E56",
        date: "Nov 2022 - Jan 2023",
        date: "Nov 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Search Engine Evaluator",
        company_name: "Telus",
        icon: telus,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using SEO tools and other related technologies.",
            "Implementing responsive queries and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        //image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        //image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Memories",
        description:
            "This is a web based version of locket that allows users to be able to share like and comment on there favorite moments",
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
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: mem,
        source_code_link: "https://github.com/Iknow6aint/Memories-app/",
    },
    {
        name: "Uber X",
        description:
            "Web application that enables Users to order rides from one destination to another in my school",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "RestAPI",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: uberx,
        source_code_link: "https://github.com/Iknow6aint/uberx",
    },
    {
        name: "Foodie",
        description:
            "An Meal Budgeting and food recommendation Moblie System that helps users Order food From verified vendors",
        tags: [
            {
                name: "React Native",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: foodie,
        source_code_link: "https://github.com/Iknow6aint/Finals",
    },
];

export { services, technologies, experiences, testimonials, projects };