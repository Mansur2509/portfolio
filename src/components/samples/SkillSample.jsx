import { useEffect } from "react";
import "../../assets/styles/main.css";

const SkillSample = ({ svg, link, hoverColor, name, id}) => {

    useEffect(() => { mousechange() }, [])

    const mousechange = (hoverColor) => {
        const appElement = document.querySelector(`.skills_svg${id}`);
        console.log(appElement);
        console.log(hoverColor);
        
        
        appElement.addEventListener("mouseover", () => {
            appElement.style.fill = `${hoverColor}`;
        });
    };

    return (
        <section className={`skill_sample${id}`}>
            <style>{`
        .link:hover path {
          fill: ${hoverColor};
          transition: fill 0.3s ease;
        }
      `}
            </style>
            <a href={link} className="link">{svg}</a>
            <p>{name}</p>
        </section>

    );
};

export default SkillSample;
