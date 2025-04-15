import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Boluwatife",
  lastName: "Obateru",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mern-stack Developer",
  avatar: "/images/avatar.jpg",
  location: "EST", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/onlybolu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/boluwatife-obateru-167765282/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:boluwatifeobateru@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mern-Stack Developer</>,
  subline: (
    <>
      I'm Boluwatife, a Full-stack developer with expertise in web development, driven to leverage technical skills to deliver innovative solutions. Proficient in cutting-edge technologies, including UI/UX design, HTML5, CSS3, JavaScript, ReactJS, Next.js, mongoDb, nodejs, Express js, Tailwind css, Bootstrap.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Boluwatife is a Full-stack developer with expertise in web development, driven to leverage technical skills to deliver innovative solutions. Proficient in cutting-edge technologies, including UI/UX design, HTML5, CSS3, JavaScript, ReactJS, Next.js, mongoDb, nodejs, Express js, Tailwind css, Bootstrap.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Skyestudio",
        timeframe: "December 2024 - March 2025",
        role: "Frontend Developer",
        achievements: [
          <>
           Successfully developed responsive and visually appealing user interfaces using Next.js, and Bootstrap, ensuring seamless user experiences.
          </>,
          <>
           Refactored and optimized frontend code, making it more efficient and maintainable.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpeg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lagos State University",
        description: <>Studied Computer science.</>,
      },
      {
        name: "Aptech Computer Education",
        description: <>Frontend Development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "HTML",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Next.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "React.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "Javascript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "Tailwind css",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "Bootstarp",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "CSS",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "Express.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "Node.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
      {
        title: "MongoDB",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [  ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
