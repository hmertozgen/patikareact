import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [number, setNumber] = useState(0);
  const data = useMemo(() => {
    return calculateObject(number);
  }, [number]); //bu numberı kaldırırsak headerı render etmez usecallback sayesinde

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);

  // const data = calculateObject();

  const [text, setText] = useState("");
  return (
    <div className="App">
      <Header data={data} increment={increment} />

      <hr />

      <h1>{number}</h1>

      <br />
      <br />

      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject(number) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Calculating completed.");
  return { name: "Mert", number };
}

export default App;
