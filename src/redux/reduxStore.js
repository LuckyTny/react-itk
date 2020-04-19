import { createStore, combineReducers } from "redux"

import dashboardReducer from './dashboardReducer'
import dialogRerucer from './dialogReducer'
import navbarReducer from './navbarReducer'
import usersReducer from "./usersReducer"

let reducers = combineReducers({
    dashboardPage: dashboardReducer,
    dialogsPage: dialogRerucer,
    navbar: navbarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store