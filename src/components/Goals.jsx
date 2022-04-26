import React from "react";
import Goal from "./Goal";

const Goals = ({ goals }) => {
  return (
    <div>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} />
      ))}
    </div>
  );
};

export default Goals;
