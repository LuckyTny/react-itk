import React from 'react';
import style from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return(
      <div>
      <div><img  src="https://apexcharts.com/wp-content/uploads/2018/05/area-chart-spline.svg"></img></div>
      <div className={style.pfBlock}>Avatar + information</div>
      </div>
    )
}

export default ProfileInfo;