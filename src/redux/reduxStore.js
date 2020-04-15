import { createStore, combineReducers } from "redux"

import dashboardReducer from './dashboardReducer'
import dialogRerucer from './dialogReducer'
import navbarReducer from './navbarReducer'

let reducers = combineReducers({
    dashboardPage: dashboardReducer,
    dialogsPage: dialogRerucer,
    navbar: navbarReducer
})

let store = createStore(reducers)

export default store