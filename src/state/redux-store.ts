import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { StoreType } from "./store";

type ReducersType = typeof rootReducer
//export const AppStateType = ReturnType<ReducersType>

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export type AppStateType = ReturnType <typeof rootReducer>

export let store = createStore(rootReducer)

