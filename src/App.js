import "./App.css";
import React, { useState } from "react";
import GoalHeader from "./Components/GoalHeader";
import GoalList from "./Components/GoalList";

function App() {
  const [goalList, setGoalList] = useState([
    {
      label: "finish now",
    },
    {
      label: "section2",
    },
    {
      label: "start next",
    },
  ]);
  const handleNewGoal = (newGoal) => {
    setGoalList([...goalList, newGoal]);
    console.log(goalList);
  };
  const handleDelete = (label) => {
    console.log(label);
    for (var i = 0; i < goalList.length; i++) {
      if (goalList[i].label === label) {
        goalList.splice(i, 1);
      }
      setGoalList([...goalList]);
      console.log(goalList);
    }
  };

  return (
    <div className="App">
      <GoalHeader onAddNewGoal={handleNewGoal} />
      <GoalList goalList={goalList} onDeleteItem={handleDelete} />
    </div>
  );
}

export default App;
