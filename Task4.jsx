import { useEffect, useState } from "react";
import axios from "axios";
export const Task4 = () => {
  const [counter, setCounter] = useState(1);
  const [data, setData] = useState({});
  const [myError, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Fetch(counter);
  }, [counter]);
  const Fetch = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setLoading(false);
      setData({ ...data });
    } catch (e) {
      setLoading(false);
      console.log(myError);
      setError("FAILED TO FETCH");
    }
  };
  return (
    <>
      <h1>Task 4</h1>
      <p>
        make a counter app based on the counter value fetch data if not
        available show proper error message
      </p>
      <p>counter is {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>search new</button>
      <br />
      {loading ? (
        "LOADING......"
      ) : myError ? (
        <p>{myError}</p>
      ) : (
        JSON.stringify(data)
      )}
    </>
  );
};
