import { useEffect, useState } from "react";

export const Task7 = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  useEffect(() => {
    let timer = setTimeout(() => setResponse(query), 500);
    return () => clearTimeout(timer);
  }, [query]);
  return (
    <div>
      <h1>TASK 7</h1>
      <p>MAKE A DEBOUNCER.......</p>
      <input
        type="text"
        placeholder="Debouncing.."
        onChange={handleChange}
        value={query}
      />
      <p>{query === "" ? "Start typing....." : `So you typed ${response}`}</p>
    </div>
  );
};
