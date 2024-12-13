const navbarContent = {
  name: "Eugene Lum",
  jobTitle: "Frontend Developer",
  introduction:
    "I specialize in web development and thrive on exploring cutting-edge front-end technologies. Whether it’s enhancing productivity at work or simplifying daily routines, I enjoy creating applications that make life easier and more enjoyable.",
};

const loremIpsum =
  "Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const aboutContent = [
  "I enjoy developing products and applications that directly impact people’s lives, with a particular passion for creating web applications due to the challenge and creativity involved in solving complex problems and crafting seamless user experiences. The best feeling comes from creating beautiful interfaces that not only look stunning but also provide intuitive and enjoyable user experiences.",
  "I am currently working as a Fullstack AI Developer at SAP, specialising in user experience. My team develops AI products and features by leveraging LLMs to enhance the user experience for customers using S/4HANA, with the goal of driving greater adoption and engagement.",
  "I am a graduate of Nanyang Technological University with a Bachelor's Degree in Computer Science. Together with my internship experiences in DSO and Shopee, I have learnt various skills ranging from system design to managing cross functional projects. I have also extended a web based development environment by incorporating features such as online lectures, auto-grading of tutorials and assignments and discussion boards among many others to support online learning during Covid-19.",
  "In my free time, I enjoy playing tennis, gyming, travelling as well as exploring new spots in search of the perfect cup of coffee.",
];

const experienceContent = [
  {
    name: "SAP",
    position: "Fullstack AI Developer",
    startDate: "Jan 2024",
    endDate: "Present",
    url: "https://www.sap.com/sea/products/erp/s4hana.html?campaigncode=CRM-YA22-INT-1517075&source=ppc-sg-googleads-search&gad_source=1&gclid=CjwKCAiAjeW6BhBAEiwAdKltMsD6NtBIU1oe2MDU4lO4P_DD8MqNiKJqNvnhhXSlqeam-uOxRhQSARoCWW0QAvD_BwE&gclsrc=aw.ds",
    description: "Developed an AI feature that translates natural language queries to OData Filters for supported applications on S/4HANA by leveraging LLMs.",
    techStack: [
      "JavaScript",
      "TypeScript",
      "ABAP",
      "UI5",
      "LLM",
      "Prompt Engineering",
      "OData Services",
      "Mocha",
      "Locust",
    ],
  },
  {
    name: "DSO National Laboratories",
    position: "Fullstack Software Engineer, Intern",
    startDate: "May 2023",
    endDate: "Dec 2023",
    url: "https://www.dso.org.sg/",
    description:
      "Developed and designed a high-performance web application with a scalable system architecture that enables multiple systems to onboard onto a central, customizable platform. Enhanced data visualization with an analytics dashboard.",
    techStack: [
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "React",
      "Next.js",
      "Node.js",
      "Tailwind",
      "Grafana",
      "Prometheus",
      "MongoDB",
      "Cypress",
      "Jest",
    ],
  },
  {
    name: "Shopee Pte Ltd",
    position: "Technical Project Management, Intern",
    startDate: "May 2022",
    endDate: "Aug 2022",
    url: "https://shopee.sg",
    description:
      "Led large-scale technical projects, improving efficiency through process analysis and optimization. Managed project planning and resource allocation while developing tools to streamline operations. Facilitated Scrum meetings for retrospectives, design discussions, and roadmap planning. Collaborated with stakeholders to ensure successful project delivery.",
    techStack: ["Confluence", "Jira", "GitHub", "GitLab", "Python"],
  },
];

const projectContent = [
  {
    name: "Project 1",
    image: "/dummy.png",
    url: "/",
    description: loremIpsum + loremIpsum,
    techStack: ["Confluence", "Jira", "GitHub", "GitLab", "Python"],
  },
  {
    name: "Project 2",
    image: "/dummy.png",
    url: "/",
    description: loremIpsum + loremIpsum,
    techStack: ["Confluence", "Jira", "GitHub", "GitLab", "Python"],
  },
  {
    name: "Project 3",
    image: "/dummy.png",
    url: "/",
    description: loremIpsum + loremIpsum,
    techStack: ["Confluence", "Jira", "GitHub", "GitLab", "Python"],
  },
];

export { navbarContent, aboutContent, experienceContent, projectContent };
