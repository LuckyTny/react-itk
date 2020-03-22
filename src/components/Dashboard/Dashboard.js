import React from 'react';
import style from './Dashboard.module.css';
import MyPosts from './MyPosts/MyPosts';


const Dashboard = () => {
    return(
        <main>
        <div><img  src="https://apexcharts.com/wp-content/uploads/2018/05/area-chart-spline.svg"></img></div>
        <div>Avatar + information</div>
        <MyPosts />
      </main>
    )
}

export default Dashboard;