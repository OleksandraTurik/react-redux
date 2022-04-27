import {ADD_GOAL, DELETE_GOAL, EDIT_GOAL} from '../types'

export const addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        payload: goal
    }

    
}

export const deleteGoal = (id) => {
    return {
        type: DELETE_GOAL,
        payload: id
    }
}

export const editGoal = (goal) => {
    return {
        type: EDIT_GOAL,
        payload: goal
    }
}