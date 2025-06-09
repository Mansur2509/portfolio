import "../../assets/styles/main.css";
import Skill from "./Skills";
import AboutMe from "./AboutMe";
import MyProject from './MyProject'
const Main = () => {
return (
    <main className="main">
    <Skill/>
     <AboutMe/>
    <MyProject/>
    </main>
  );
};

export default Main;
