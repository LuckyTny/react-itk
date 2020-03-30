import React from 'react';
import style from './Dashboard.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Dashboard = () => {
    return(
      <main>
        <ProfileInfo />
        <MyPosts />
      </main>
    )
}

export default Dashboard;