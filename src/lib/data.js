export const socialLinks = [
  {
    id: 1,
    title: "Karan Singh's Github Profile",
    link: "https://github.com/itskaransingh",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className=""
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Karan Singh's LinkedIn Profile",
    link: "https://www.linkedin.com/in/itskaransingh/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className=""
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Check Karan Singh's Twitter",
    link: "https://twitter.com/its_karansingh",
    svg: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
        </g>
      </svg>
    ),
  },

];

export const navLinks = [
  // {
  //   url: "#",
  //   text: "Welcome",
  // },
  {
    url: "#about",
    text: "Who am i?",
  },
  {
    url: "#skills",
    text: "Skills",
  },
  {
    url: "#projects",
    text: "Projects",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];


export const featuredprojects = [
  {
    srno: 1,
    title: "OpenRecruit - A Job Search App",
    img: "/projects/openrecruit.webp",
    desc: "OpenRecruit is a Job Searching App that fetches jobs from various platforms like LinkedIn, Indeed, ZipRecruiter, and others on Google for Jobs in real-time using JSearch Api. This app is built using React Native and Expo. This app is my first project in React Native.",
    toolsAndTech: ["React Native", "Expo", "RapidAPI", "Coustom Hooks"],
    liveurl: null,
    github: "https://github.com/itskaransingh/openrecruit",
  },
  {
    srno: 2,
    title: "MotoGin CRM - A Easy CRM",
    img: "/projects/motogin-crm.webp",
    desc: "I had the privilege of developing a cutting-edge CRM system to streamline their operations and enhance customer experience. Leveraging Next.js in the frontend and MongoDB in the backend, we've created a robust and dynamic solution tailored to MotoGin's unique needs like Lead Requirements, car model, comments etc.",
    toolsAndTech: ["NextJs", "Shadcn UI", "Tailwind CSS", "Clerk", "Prisma", "MongoDB"],
    liveurl: "https://crmwithease.vercel.app/",
    github: null,
  },
  {
    srno: 3,
    title: "LingoBot - Learn Languages with AI",
    img: "/projects/lingobot.webp",
    desc: "Learn languages from LingoBot through conversations with AI. LingoBot is a chatbot made using OpenAI GPT-3.5 API for the purpose of conversing in chats with you in the language of your choice so that you can learn the language through the conversation.",
    toolsAndTech: ["NextJs", "OpenAI", "Tailwind CSS", "Prisma", "PlanetScale", "NextAuth"],
    liveurl: "https://lingobot.chat/",
    github: "https://github.com/itskaransingh/LingoBot",
  },
  {
    srno: 4,
    title: "Picstack - A Social Media Web App",
    img: "/projects/picstack.webp",
    desc: "PicStack - A Social Media Web App Picstack is a social media web app in which a user can login with google oauth2.0 and can upload posts, delete posts and can also like and comment on posts of others and many other functionalities",
    toolsAndTech: ["Javascript", "React", "Sanity", "Tailwind CSS","Vite"],
    liveurl: "https://picstack26.netlify.app",
    github: "https://github.com/itskaransingh/picstack",
  },
  {
    srno: 5,
    title: "Cryptoverse - Statistics,News regarding Cryptocurrencies",
    img: "/projects/cryptoverse.webp",
    desc: "Cryptoverse is basically a platform in which a user can see live crypto stats , learn about various cryptocurrencies and can watch news of a particular cryptocurrencies . This Application is made with the help of react , redux and antdesign",
    toolsAndTech: ["Javascript", "React", "Rapid Api", "Ant Design", "Vite"],
    liveurl: "https://cryptoverse26.vercel.app/",
    github: "https://github.com/itskaransingh/cryptoverse",
  },
  // {
  //   srno: 3,
  //   title: "Picstack - A Social Media Web App",
  //   img: "/projects/cryptoverse.webp",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum facilis magnam perferendis natus liberoinventore, assumenda quidem reprehenderit, aliquam enim esse quod? Maxime nobis dolorum corporis rem laboriosam amet.",
  //   lang: ["Javascript", "React", "Sanity", "Tailwind CSS"],
  //   liveurl: "https://picstack26.netlify.app",
  //   github: "https://github.com/itskaransingh/picstack",
  // },
];


const skills={
  
}