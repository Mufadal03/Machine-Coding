import { useState } from "react";
const optionsArr = [
  "Library",
  "History",
  "Watch Later",
  "Liked Videos",
  "Subscription",
  "Trendings",
  "Playlist",
  "Music",
  "Games"
];
export const Task5 = () => {
  const [dataSet] = useState(optionsArr);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <h1>Task 5</h1>
      <p>
        MAKE A DROPDOWN PANEL WHERE WE CLICK ON SHOW MORE IT WILL EXPAND AND
        WHEN WE CLICK ON SHOW LESS IT COLLAPSE
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: ".2rem" }}>
        {dataSet.map((el, i) => {
          if (i < (!showMore ? 4 : optionsArr.length)) {
            return (
              <div
                key={i}
                style={{
                  border: "1px solid",
                  width: "30%",
                  margin: "auto",
                  padding: "10px",
                  cursor: "pointer"
                }}
              >
                {el}
              </div>
            );
          }
        })}
        <div
          onClick={() => setShowMore(!showMore)}
          style={{
            backgroundColor: "gray",
            border: "1px solid",
            width: "30%",
            margin: "auto",
            padding: "10px",
            cursor: "pointer"
          }}
        >
          {!showMore ? "SHOW MORE " : "SHOW LESS"}
        </div>
      </div>
    </>
  );
};
