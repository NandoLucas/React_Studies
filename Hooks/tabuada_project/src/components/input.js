import React, { useState } from "react";

export default function Input(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleKeyUp(e) {
    if (e.keyCode === 13) {
      if (props.onEnter) {
        props.onEnter(text);
      }
      setText("");
      setCount(count + 1);
    }
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyUp={handleKeyUp}
        placeholder="Type a number"
      ></input>
      <p>You searched the multiplication table {count} times</p>
    </>
  );
}
