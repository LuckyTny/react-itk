import React from 'react';
import style from './Dashboard.module.css'


const Dashboard = () => {
    return(
        <main>
        <div><img src="https://apexcharts.com/wp-content/uploads/2018/05/area-chart-spline.svg"></img></div>
        <div>Avatar + information</div>
        <div>
          <div className="posts">My posts</div>
          <div>New Post Form</div>
          <div className={style.item}>Post 1</div>
          <div className={style.item}>Post 2</div>
          <div className={style.item}>Post 3</div>
        </div>
      </main>
    )
}

export default Dashboard;