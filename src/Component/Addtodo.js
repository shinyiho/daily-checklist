import React, { useState } from "react";

function Addtodo({ onsubmit }) {
  const [title, setTitle] = useState("");

  let onchange = (e) => {
    setTitle(e.target.value);
    console.log(e.target);
  };

  return (
    <form
      style={addtodoStyle}
      onSubmit={(e) => {
        onsubmit(e, title);
        setTitle("");
      }}
    >
      <input style={inputStyle} type="text" placeholder="Add todo" value={title} onChange={onchange}></input>
      <button style={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
}

const addtodoStyle = {
  "border-radius": "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "margin-top": "20px",
};

const inputStyle = {
  flex: "9",
  padding: "7px 20px",
  border: "none",
  "border-radius": "5px",
};

const buttonStyle = {
  flex: "1",
  border: "none",
  padding: "7px 20px",
  "border-radius": "5px",
  "margin-left": "15px",
};
export default Addtodo;
