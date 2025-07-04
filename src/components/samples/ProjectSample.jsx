import "./Samples.css";
import "../../assets/styles/main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Project = ({ position, id, header, text, img }) => {
  return (

    <div className={`${position ? "right" : `left`} Main_text${id} SSS `} data-aos={ position ? 'fade-right' : 'fade-left'}>

      <div>
        <img src={img} alt="" className="projImg" />
      </div>
      <div className="Sample_Content">
        <h2>0{id}</h2>
        <h2>{header}</h2>
        <p>{text}</p>
        <button>
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
    </div>
  );
};

export default Project;
