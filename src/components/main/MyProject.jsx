import "../../assets/styles/main.css";
import "../../assets/styles/projects.css";
import { useState } from "react";

const MyProject = () => {
  const [count, setCount] = useState(0);
  // const array1 = [
  //   { id: 1, text: 1 },
  //   { id: 2, text: 2 },
  //   { id: 3, text: 3 },
  //   { id: 4, text: 4 },
  //   { id: 5, text: 5 },
  //   { id: 6, text: 6 },
  //   { id: 7, text: 7 },
  // ];
  const F = () => {
    count+3;
    console.log(count);
  };
  // array1.map((el) => console.log(el.text));
  // const map1 = array1.map((x = count) => x);

  return (
    <section className="MyProjectMain">
      <button onClick={console.log('p')}>dddd</button>
    </section>
  );
};

export default MyProject;
