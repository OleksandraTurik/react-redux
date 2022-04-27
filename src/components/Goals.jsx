import React from "react";
import Goal from "./Goal";

const Goals = ({ goals }) => {
  return (
    <>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </>
  );
};

export default Goals;
