import React from 'react';
import style from './Dashboard.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Dashboard = (props) => {
  debugger;
    return(
      <main>
        <ProfileInfo />
        <MyPostsContainer />
      </main>
    )
}

export default Dashboard;