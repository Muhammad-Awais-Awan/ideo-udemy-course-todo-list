import React from "react";
import "./Goalitem.css";
export default function Goalitem(props) {
  const deleteHandler = () => {
    props.takingGoalItem(props.label);
  };
  return (
    <div onClick={deleteHandler} className="item">
      <h4>{props.label}</h4>
    </div>
  );
}
