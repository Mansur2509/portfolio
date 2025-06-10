import "../../assets/styles/main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(); 
const SkillSample = ({ svg, link, name, id }) => {


  return (
    <div className="Po" data-aos="fade-right" data-aos-durarion={`${id}000`}>
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
