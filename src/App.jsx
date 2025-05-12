import React, { useRef } from "react";
import "./assets/styles/root.css";
import Nav from "./components/NavBar";
import Header from "./components/Headerr";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Main from "./components/main/Main";

const App = () => {

  //TODO useEffect(() => {
  //     mousechange();
  //   }, []); 
  //   const mousechange = () => {
  //     const appElement = document.querySelector(".app");

  //     let count = 0;

  //     window.addEventListener("click", () => {
  //       console.log(appElement);
  //       count < 13 ? count++ : (count = 1);
  //       console.log(count);
  //       const urlWay = `../icon/Vector${count}.svg`;
  //       console.log(urlWay);
  //       appElement.style.cursor = `url('${urlWay}'), help`;
  //     });
  //   };
  const contentRef = useRef();
  const DownloadPDF = async () => {
    const element = contentRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="app" ref={contentRef}>
      <Nav DownloadPDF={DownloadPDF} />
      <Header />
      <Main/>
    </div>
  );
};

export default App;
