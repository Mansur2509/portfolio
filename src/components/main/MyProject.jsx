import "../../assets/styles/main.css";
import Project from "../samples/ProjectSample";
import { useState } from "react";

const MyProject = () => {
  const [side, setSide] = useState(false);
  const ProjectList = [
    {
      id: 1,
      position: true,
      header: "Portfolio",
      text: "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
    },
    {
      id: 2,
      position: false,
      header: "Weather App",
      text: "Developed a frontend weather app using React/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.",
    },
    {
      id: 3,
      position: true,
      header: "Notes app",
      text: "Created a note taking and list taking app using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    },
    {
      id: 4,
      position: false,
      header: "Online chat",
      text: "Crafted online messeanger which was React-based app. There shown work of React hooks and it was styled by CSS",
    },
    {
      id: 5,
      position: true,
      header: "Business Adv syte",
      text: "This syte was created fully-vanila JavaScript. And also was styled with CSS3. There are several functions and UI",
    },
    {
      id: 6,
      position: false,
      header: "Vue Cinema",
      text: "Online cinema web-syte whicn was build with-out JavaScript. Just HTML5 and CSS3",
    },
    {
      id: 7,
      position: true,
      header: "Grayson shop",
      text: "My first project which was made myself at 14 years old at the begging of my education",
    },
  ];
  // const F = () => {
  //   count + 3;
  //   console.log(count);
  // };
  // array1.map((el) => console.log(el.text));
  // const map1 = array1.map((x = count) => x);

  return (
    <section className="MyProjectMain container">
      <h2>
        My <span>Projects</span>
      </h2>

      {ProjectList.map((el) => (
        <Project
          key={el.id}
          position={el.position}
          id={el.id}
          header={el.header}
          text={el.text}
        />
      ))}
      <button onClick={console.log("p")}>dddd</button>
    </section>
  );
};

export default MyProject;
