import { ADD_GOAL, DELETE_GOAL, EDIT_GOAL } from "../types";

const initialState = {
  goals: [],
};

export const goalsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] 
    };
    case DELETE_GOAL:
      return {...state, goals: state.goals.filter(goal => goal.id !== action.payload)}

    case EDIT_GOAL:
      const changeGoal = state.goals.map(goal => goal.id === action.payload.id ? ({
        ...goal,
        title: action.payload.title
      }) : goal);
      return {
        ...state, goals:  changeGoal
      }
    default: return state
  }
  
};
