import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Dashboard = (props) => {
    return(
      <main>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
      </main>
    )
}

export default Dashboard;