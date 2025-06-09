import "../../assets/styles/main.css";
import Project from "../samples/ProjectSample";
import { useState } from "react";

const MyProject = () => {
  const [count, setCount] = useState(3);

  const ProjectList = [
    {
      id: 1,
      position: true,
      header: "Portfolio",
      img: 'src/assets/Images/project1.png',
      text: "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
    },
    {
      id: 2,
      position: false,
      header: "Weather App",
      img: 'src/assets/Images/project2.png',
      text: "Developed a frontend weather app using React/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.",
    },
    {
      id: 3,
      position: true,
      header: "Notes app",
      img: 'src/assets/Images/project3.png',
      text: "Created a note taking and list taking app using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    },
    {
      id: 4,
      position: false,
      header: "Online chat",
      img: 'src/assets/Images/project4.png',
      text: "Crafted online messeanger which was React-based app. There shown work of React hooks and it was styled by CSS",
    },
    {
      id: 5,
      position: true,
      header: "Business Adv syte",
      img: 'src/assets/Images/project5.png',
      text: "This syte was created fully-vanila JavaScript. And also was styled with CSS3. There are several functions and UI",
    },
    {
      id: 6,
      position: false,
      header: "Vue Cinema",
      img: 'src/assets/Images/project6.png',
      text: "Online cinema web-syte whicn was build with-out JavaScript. Just HTML5 and CSS3",
    },
    {
      id: 7,
      position: true,
      header: "Grayson shop",
      img: 'src/assets/Images/project7.png',
      text: "My first project which was made myself at 14 years old at the begging of my education",
    },
  ];

  return (
    <section className="MyProjectMain ">
      <div className="container s">
        <h2 id="h2">My Projects</h2>
        {ProjectList.slice(0, count).map((el) => (
          <Project
            key={el.id}
            position={el.position}
            id={el.id}
            header={el.header}
            text={el.text}
            img={el.img}
          />
        ))}

        <button
          className="project_button"
          onClick={() =>
            count == 7 ? setCount(3) : setCount((prev) => Math.min(prev + 3, ProjectList.length))
          }
        >
          {count == 7 ? 'Back' : `More`}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8333 9.16658L17.6667 2.33325"
              stroke="var(--base)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3333 5.66675V1.66675H14.3333"
              stroke="var(--base)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16667 1.66675H7.5C3.33333 1.66675 1.66667 3.33341 1.66667 7.50008V12.5001C1.66667 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V10.8334"
              stroke="var(--base)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default MyProject;
