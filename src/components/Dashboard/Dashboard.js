import React from 'react';
import style from './Dashboard.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Dashboard = (props) => {
    return(
      <main>
        <ProfileInfo />
        <MyPosts 
          posts={props.dashboardPage.posts}
          addPost={props.addPost}
          updatePostText={props.updatePostText}
          newPostText={props.dashboardPage.newPostText}
          
          />
      </main>
    )
}

export default Dashboard;