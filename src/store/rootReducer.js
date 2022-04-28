import { combineReducers, createStore } from "redux";
import {goalsReducer} from './reducers/reducersGoal'
import {themeReducer} from './reducers/themeReducer'


const rootReducer = combineReducers({
    goalsList: goalsReducer,
     themeReducer
});

 const store = createStore(rootReducer);
 export default store;