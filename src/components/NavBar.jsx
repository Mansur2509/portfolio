import { useTheme } from "../provider/prowider";
import "../assets/styles/nav.css";

const Nav = ({ DownloadPDF }) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className="nav container">
      <div className="nav_content">
        <div className="nav_list_cont">
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5294 12.2118C23.5294 16.8819 20.7623 20.9082 16.7793 22.7351C18.4612 21.3496 19.5322 19.248 19.5322 16.896C19.5322 12.7642 16.2259 9.40423 12.112 9.32046C12.0574 9.3167 12.0075 9.3167 11.9529 9.3167C11.8983 9.3167 11.8485 9.3167 11.7939 9.32046C10.2673 9.40328 9.05882 10.6663 9.05882 12.2108V26.6814C9.05882 31.4748 5.16988 35.3638 0.376465 35.3638V12.2118C0.376465 5.81928 5.56047 0.635284 11.9529 0.635284C18.3454 0.635284 23.5294 5.81928 23.5294 12.2118Z"
              fill="var(--contr_base)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <ul className="nav_list">
            <li
              id="w1"
              onClick={() => {
                window.scrollTo({ top: 100, behavior: "smooth" })
              }}
            >
              Personal
            </li>
            <li
              id="w2"
              onClick={()=>{window.scrollTo({ top: 720, behavior: "smooth" }),console.log('ss');}}
            >
              Skills
            </li>
            <li
              id="w3"
              onClick={window.scrollTo({ top: 1440, behavior: "smooth" })}
            >
              About me
            </li>
            <li
              id="w4"
              onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Projects
            </li>
            <li
              id="w5"
              onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact me
            </li>
          </ul>
        </div>
        <div className="nav_buttons">
          <button className="theme" onClick={toggleTheme}>
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.20971 1.41665C5.59929 3.09374 3.83471 6.05415 3.83471 9.43749C3.83471 12.8208 5.59929 15.7812 8.25346 17.4583C3.77637 17.4583 0.188873 13.8708 0.188873 9.43749C0.188873 7.31023 1.03392 5.2701 2.53812 3.7659C4.04232 2.2617 6.08245 1.41665 8.20971 1.41665ZM25.0826 3.60415L27.168 5.68957L4.46179 28.3958L2.37637 26.3104L25.0826 3.60415ZM16.0701 7.1479L13.9118 5.79165L11.8118 7.24999L12.4243 4.77082L10.3972 3.22499L12.9493 3.04999L13.7951 0.643738L14.7722 3.02082L17.2951 3.06457L15.3264 4.71249L16.0701 7.1479ZM11.2576 12.4125L9.56596 11.3479L7.93262 12.4854L8.42846 10.5604L6.83887 9.34999L8.82221 9.21874L9.47846 7.33749L10.2222 9.18957L12.2055 9.23332L10.6743 10.5021L11.2576 12.4125ZM24.9805 18.1875C24.9805 20.3147 24.1355 22.3549 22.6313 23.8591C21.1271 25.3633 19.087 26.2083 16.9597 26.2083C15.1805 26.2083 13.5326 25.625 12.2055 24.6479L23.4201 13.4333C24.3972 14.7604 24.9805 16.4083 24.9805 18.1875ZM18.5639 27.7833L22.6035 26.1062L22.2535 30.9917L18.5639 27.7833ZM24.8785 23.8458L26.5555 19.8062L29.7639 23.5104L24.8785 23.8458ZM26.5555 16.6125L24.893 12.5583L29.7639 12.9083L26.5555 16.6125ZM11.316 26.1062L15.3555 27.7833L11.666 30.9771L11.316 26.1062Z"
                fill="var(--contr_base)"
              />
            </svg>
          </button>
          <button className="resume" onClick={DownloadPDF}>
            <p>Resume</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5001 11.5V12.5C16.5001 13.9001 16.5001 14.6002 16.2276 15.135C15.988 15.6054 15.6055 15.9878 15.1351 16.2275C14.6003 16.5 13.9003 16.5 12.5001 16.5H5.50012C4.09999 16.5 3.39993 16.5 2.86515 16.2275C2.39474 15.9878 2.01229 15.6054 1.77261 15.135C1.50012 14.6002 1.50012 13.9001 1.50012 12.5V11.5M13.1668 7.33333L9.00012 11.5M9.00012 11.5L4.83346 7.33333M9.00012 11.5V1.5"
                stroke="var(--base)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
