import React from 'react';
import style from './Dashboard.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Dashboard = (props) => {
    return(
      <main>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
      </main>
    )
}

export default Dashboard;