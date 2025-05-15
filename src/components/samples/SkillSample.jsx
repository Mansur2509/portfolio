import "../../assets/styles/main.css";

const SkillSample = ({ svg, link, name, id }) => {


  return (
    <div className="Po">
      <section className={`skill_sample${id}`}>
        <a href={link} className="link">
          {svg}
        </a>
        <p className={`skill_parag${id}`}>{name}</p>
      </section>
    </div>
  );
};

export default SkillSample;
