import { applyMiddleware, combineReducers, createStore } from "redux";
import { taskReducer } from "./taskReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({                           // создаём корневой Reducer объединяя создаваемые нами Reducer-ы с помощью combineReducers
    tasks: taskReducer,
    count: countReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))