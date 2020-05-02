import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader/Preloader';



const ProfileInfo = (props) => {
debugger
  if(!props.profile) {
    return  <Preloader />
  }

    return(
      <div>
      <div><img className={style.avatarPic}src={props.profile.photos.large} alt='user avatar'/></div>
      <div className={style.pfBlock}>{props.profile.aboutMe}</div>
      <div className={style.pfBlock}>{props.profile.fullName}</div>
      <div className={style.pfBlock}>{props.profile.lookingForAJobDescription}</div>
      </div>
    )
}

export default ProfileInfo;