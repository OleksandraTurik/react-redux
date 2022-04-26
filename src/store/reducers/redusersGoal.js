import { ADD_GOAL } from "../types";

const initialState = {
  goals: [],
};

export const goalsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, action.payload] 
    };
    default: return state
  }
  
};
