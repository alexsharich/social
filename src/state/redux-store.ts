import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { appReducer } from "./appReducer";

type ReducersType = typeof rootReducer

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

