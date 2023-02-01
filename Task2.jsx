import { useState } from "react";

const countries = [
  {
    name: "India",
    cities: ["Mumbai", "Delhi"]
  },
  {
    name: "Pakistan",
    cities: ["Karachi", "Lahore"]
  },
  {
    name: "Bangladesh",
    cities: ["Dhaka", "Chittagong"]
  }
];
export const Task2 = () => {
  const [data] = useState(countries);
  const [city, setCity] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.value);
    e.target.value !== "-1"
      ? setCity([...data[e.target.value].cities])
      : setCity([]);
  };
  return (
    <>
      <h1>Task 2</h1>
      <p>
        make dynamic dropdowns if any country selected then 2nd dropdown should
        popup with the cities
      </p>
      <select onChange={handleChange}>
        <option value="-1">SELECT COUNTRY</option>
        {data.map((el, index) => {
          return <option value={index}>{el.name}</option>;
        })}
      </select>
      {city?.length > 0 ? (
        <select>
          <option>SELECT CITY</option>
          {city.map((el) => (
            <option>{el}</option>
          ))}
        </select>
      ) : null}
    </>
  );
};
