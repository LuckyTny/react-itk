import { createStore, combineReducers } from "redux"

import dashboardReducer from './dashboardReducer'
import dialogRerucer from './dialogReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
    dashboardPage: dashboardReducer,
    dialogsPage: dialogRerucer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store