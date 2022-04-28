import { ADD_GOAL, ADD_TEXT, DELETE_GOAL, EDIT_GOAL, TOGGLE_THEME } from "../types";

export const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    payload: goal,
  };
};

export const addText = (goal) => {
  return {
    type: ADD_TEXT,
    payload: goal,
  };
};

export const deleteGoal = (id) => {
  return {
    type: DELETE_GOAL,
    payload: id,
  };
};

export const editGoal = (goal) => {
  console.log(goal);
  return {
    type: EDIT_GOAL,
    payload: goal,
  };
};

export const toggleTheme = () => {
  return { 
      type: TOGGLE_THEME, 
    };
};
