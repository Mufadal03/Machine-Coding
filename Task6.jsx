import { useState } from "react";
const optionsArr = ["RED", "BLUE", "GREEN", "YELLOW", "PINK", "BLACK"];
export const Tags = ({ title, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid",
        padding: "5px 15px",
        display: "flex",
        gap: ".5rem",
        flexWrap: "wrap"
      }}
    >
      <span>{title}</span>
      <span
        onClick={() => onClick(title)}
        style={{
          cursor: "pointer",
          color: "red"
        }}
      >
        x
      </span>
    </div>
  );
};
export const Task6 = () => {
  const [data, setData] = useState(optionsArr);
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value === "-1") return;
    setSelected([...selected, value]);
    let newData = data.filter((el) => el !== value);
    setData(newData);
  };

  const handleTagRemove = (val) => {
    let newTags = selected.filter((el) => el !== val);
    setSelected(newTags);
    setData([...data, val]);
  };
  return (
    <>
      <h1>TASK 6</h1>
      <p>
        Make dynamic select tag where user can select multiple data and remove
        selected data from an options
      </p>

      <div
        style={{
          display: "flex",
          gap: "0.3rem"
        }}
      >
        {selected.map((el) => (
          <Tags title={el} onClick={handleTagRemove} />
        ))}
      </div>

      <select onChange={handleChange}>
        <option value="-1">Select Color</option>
        {data.map((el, i) => {
          return (
            <option key={i + 1} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </>
  );
};
