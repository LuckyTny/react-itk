import React from 'react';
import Dashboard from './Dashboard'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/dashboardReducer'
import { withRouter } from 'react-router-dom'


class DashboardContainer extends React.Component {

componentDidMount() {
     let userId = this.props.match.params.userId
     if(!userId) {
       userId = 10
     }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
          .then( response => {
        this.props.setUserProfile(response.data)
        console.log('set user', this.props.setUserProfile(response.data))
        })
}

  render(){
    return(
      <main>
        <Dashboard {...this.props} profile={this.props.profile}/>
      </main>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.dashboardPage.profile
})

let UrlDataContainer = withRouter(DashboardContainer)

export default connect(mapStateToProps, {setUserProfile} )(UrlDataContainer);