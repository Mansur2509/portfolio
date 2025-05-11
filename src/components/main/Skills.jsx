import "../../assets/styles/main.css";
import SkillSample from "../samples/SkillSample";

const Skill = ({ skill_list }) => {


  return (
    <section className="skills container">
      <h2>My<span>Skills</span></h2>
      <div className="skills_grid">
        {skill_list.map((el) => (
          <SkillSample key={el.id}
            id={el.id}
            svg={el.svg}
            link={el.link}
            hoverColor={el.hoverColor}
            name={el.name}
         
            />)
        )}
      </div>
    </section>
  );
};

export default Skill;
