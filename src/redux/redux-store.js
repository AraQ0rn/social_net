import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./messagesReducer";
import frendsReducer from "./frendsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
        profile: profileReducer,
        messages: dialogsReducer,
        frends: frendsReducer,
        users: usersReducer
})

let store = legacy_createStore(reducers)

export default store