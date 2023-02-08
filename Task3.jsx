import { useState } from "react";

const optionsArr = ["cricket", "coding", "carrom", "football", "hockey"];
const daysArr = ["weekdays", "weekend"];
export const Task3 = () => {
  const [games] = useState(optionsArr);
  const [days] = useState(daysArr);
  return (
    <>
      <h1>Task 3</h1>
      <p>make dynamic radio buttons from two array for two different value</p>
      {games.map((el, i) => (
        <>
          <input type="radio" id={el} name="games"></input>
          <label htmlFor={el}>{el}</label>
          <br />
        </>
      ))}
      <br />
      {days.map((el, i) => (
        <>
          <input type="radio" id={el} name="days"></input>
          <label htmlFor={el}>{el}</label>
          <br />
        </>
      ))}
    </>
  );
};
