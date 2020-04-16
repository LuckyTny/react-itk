import React from 'react';
import style from './Dashboard.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Dashboard = (props) => {
  debugger;
    return(
      <main>
        <ProfileInfo />
        <MyPostsContainer store={props.store}
          // posts={props.dashboardPage.posts}
          // dispatch={props.dispatch}
          // newPostText={props.dashboardPage.newPostText}
         />
      </main>
    )
}

export default Dashboard;