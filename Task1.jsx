import { useEffect, useRef, useState } from "react";

const arr = [
  "play game",
  "DO Coding",
  "READ BOOKS",
  "EAT SNACKS",
  "READ BOOKS"
];

export const Task1 = () => {
  const [selected, setSelect] = useState([]);
  const [data, setData] = useState(arr);
  const handleChange = (elem, index) => {
    let myStore = [...selected];
    if (selected.includes(elem)) {
      myStore.splice(myStore.indexOf(elem), 1);
    } else {
      myStore.push(elem);
    }
    setSelect([...myStore]);
  };

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  const handleDelete = (index) => {
    let ans = data.filter((el, i) => i !== index);
    setData(ans);
  };
  console.log(selected);
  return (
    <>
      <h1>Task 1</h1>
      <p style={{ width: "50%", margin: "auto" }}>
        When a input box is checked delete btn should be shown after clicking el
        should be deleted
      </p>
      <b>
        BUG : same name causes problem and once deleted default check is there
      </b>
      {data.map((el, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid rgba(0,0,0,1)",
              display: "flex",
              gap: "1rem",
              margin: "1rem",
              justifyContent: "center"
            }}
          >
            <input
              onChange={() => handleChange(el, index)}
              type="checkbox"
              defaultChecked={false}
            />
            <p>{el}</p>
            {selected?.includes(el) && (
              <button onClick={() => handleDelete(index)}>DELETE</button>
            )}
          </div>
        );
      })}
    </>
  );
};
