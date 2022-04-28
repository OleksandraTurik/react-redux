import React from "react";
import Goal from "./Goal";
import { useSelector } from "react-redux";

const Goals = () => {
  const goals = useSelector(state => state.goalsList.goals);
  console.log(goals)
  return (
    <>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </>
  );
};

export default Goals;
