import * as axios from 'axios'

const FOLLOW ='FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHNIG = 'TOGGLE_IS_FETCHNIG'

let initialState = { 
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
            ...state, 
            users: state.users.map(u => {
                if(u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            })
        }
        case UNFOLLOW:
            return {
            ...state, 
            users: state.users.map(u => {
                if(u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u
            })
        }
        case SET_USERS:{
            return {...state, users: action.users }
          }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage }
          }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount }
          }
        case TOGGLE_IS_FETCHNIG:{
            return {...state, isFetching: action.isFetching }
          }
        default: return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID})
export const unfollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHNIG, isFetching})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then( response => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setCurrentPage(currentPage))
        })
    }
} 

export default usersReducer