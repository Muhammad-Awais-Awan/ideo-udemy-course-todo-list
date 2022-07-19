import React, { useState } from "react";
import "./GoalHeader.css";
export default function GoalHeader(props) {
  const [input, setInput] = useState("");

  const buttonSubmitHandler = () => {
    const goalitem = { label: input };

    props.onAddNewGoal(goalitem);
  };
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="header">
      <h3 className="goal-header__label">Course Goal</h3>
      <input
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
