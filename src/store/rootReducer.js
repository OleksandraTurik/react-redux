import { combineReducers, createStore } from "redux";
import {goalsReduser} from './reducers/redusersGoal'


const rootReducer = combineReducers({
    goalsList: goalsReduser
});

 const store = createStore(rootReducer);
 export default store;