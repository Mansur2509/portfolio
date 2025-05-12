import "../../assets/styles/main.css";
import Skill from "./Skills";
import AboutMe from "./AboutMe";
import MyProject from './MyProject'
import Testimoal from "./Testimoal";
const Main = () => {
return (
    <main className="main">
    <Skill/> <AboutMe/>
    <MyProject/>
    <Testimoal/>
    </main>
  );
};

export default Main;
