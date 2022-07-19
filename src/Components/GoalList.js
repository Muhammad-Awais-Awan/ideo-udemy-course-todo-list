import React from "react";
import Goalitem from "./Goalitem";
export default function GoalList(props) {
  const passingGoalItem = (label) => {
    props.onDeleteItem(label);
  };
  return (
    <div>
      {props.goalList.map((item, index) => (
        <Goalitem
          label={item.label}
          key={index}
          takingGoalItem={passingGoalItem}
        />
      ))}
    </div>
  );
}
