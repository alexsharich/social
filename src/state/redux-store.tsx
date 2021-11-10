import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

type ReducersType = typeof reducers
//export const AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

let store = createStore(reducers)

export default store;