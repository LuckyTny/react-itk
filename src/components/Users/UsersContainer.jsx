import React from 'react'
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/usersReducer';




class UsersContainer extends React.Component {
  
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
  
    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      
        />
     </>
        
    }
}

let mapSateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

export default connect(mapSateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(UsersContainer)

