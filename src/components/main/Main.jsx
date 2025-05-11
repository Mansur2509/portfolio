import "../../assets/styles/main.css";
import Skill from "./Skills";
import MyExp from "./MyExp";
import AboutMe from "./AboutMe";
import MyProject from './MyProject'
import Testimoal from "./Testimoal";
const Main = ({skill_list}) => {
return (
    <main className="main">
    <Skill skill_list={skill_list}/>
    <MyExp/>
    <AboutMe/>
    <MyProject/>
    <Testimoal/>
    </main>
  );
};

export default Main;
