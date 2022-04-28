import { ADD_GOAL, ADD_TEXT, DELETE_GOAL, EDIT_GOAL } from "../types";

const initialState = {
  goals: [],
};

export const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] 
    };
    case ADD_TEXT:
      return { ...state, goals: [...state.goals, action.payload] 
    };
    case DELETE_GOAL:
      return {...state, goals: state.goals.filter(goal => goal.id !== action.payload)}

    case EDIT_GOAL:
      console.log(action.paylod)
      const changeGoal = state.goals.map(goal => goal.id === action.payload.id ? ({
        ...goal,
        title: action.payload.title,
        description: action.payload.description
      }) : goal);
      return {
        ...state, goals:  changeGoal
      }
    default: return state
  }
  
};
