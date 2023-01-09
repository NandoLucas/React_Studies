import React, { useState } from "react";
import "./App.css";
import Tabuada from "./components/tabuada";
import Input from "./components/input";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>Multiplication Table</h1>
      <Input onEnter={setNumber} />
      <Tabuada number={number} />
    </>
  );
}

export default App;
