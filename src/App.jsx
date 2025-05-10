// import React from "react";
// import "./assets/styles/root.css";
// import Nav from "./components/NavBar";
// import Header from "./components/Headerr";
// import { useRef, useEffect } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const App = () => {
//   const contentRef = useRef();
//   useEffect(() => {
//     mousechange();
//   });
//   const mousechange = () => {
//     const App = document.getElementsByClassName('.app')
//     let count = 0;
//     window.addEventListener("click", () => {
//       count < 15 ? count++ : (count = 1);
//       console.log(count);
//       const urlWay = `/icon/Vector${count}.svg`;
//       App.style.cursor = url(urlWay),auto
//     });
//   };
//   const DownloadPDF = async () => {
//     const element = contentRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");

//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("resume.pdf");
//   };
//   return (
//     <div className="app" ref={contentRef}>
//       <Nav DownloadPDF={DownloadPDF} />
//       <Header />
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import "./assets/styles/root.css";
import Nav from "./components/NavBar";
import Header from "./components/Headerr";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const App = () => {
  const contentRef = useRef();

  useEffect(() => {
    mousechange();
  }, []); 
  const mousechange = () => {
    const appElement = document.querySelector(".app");
  
    let count = 0;

    window.addEventListener("click", () => {
      console.log(appElement);
      count < 13 ? count++ : (count = 1);
      console.log(count);
      const urlWay = `../icon/Vector${count}.svg`;
      console.log(urlWay);
      appElement.style.cursor = `url('${urlWay}'), help`;
    });
  };

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
    </div>
  );
};

export default App;