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
    currentPage: 2,
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

export const followAC = (userID) => ({ type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHNIG, isFetching})

export default usersReducer