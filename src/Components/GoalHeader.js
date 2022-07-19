import React, { useState } from "react";
import "./GoalHeader.css";
export default function GoalHeader(props) {
  const [input, setInput] = useState("");
  const [isNotEmpty, setisNotEmpty] = useState(true);
  const buttonSubmitHandler = () => {
    const goalitem = { label: input };
    if (input.trim().length === 0) {
      setisNotEmpty(false);
      return;
    }
    props.onAddNewGoal(goalitem);
  };
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
    setisNotEmpty(true);
  };

  return (
    <div className="header">
      <h3 className={`goal-header__label ${isNotEmpty ? "" : "invalid"}`}>
        Course Goal
      </h3>
      <input
        style={{
          borderColor: isNotEmpty ? "black" : "red",
          background: isNotEmpty ? "transparent" : "salmon",
        }}
        className="goal-header__input"
        type="text"
        value={input}
        onChange={inputChangeHandler}
      />
      <button className="goal-header__button" onClick={buttonSubmitHandler}>
        Add Goal
      </button>
    </div>
  );
}
