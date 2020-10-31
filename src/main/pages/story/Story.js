import React from 'react';
import s from './Story.module.css'
import {Avatar} from '@material-ui/core';

function Story({ image, title, profileSrc}){
    return(
        <div style={{backgroundImage: `url(${image})`}} 
            className={s.StoryContainer}>
            <div className={s.avatarIcon}>
                {profileSrc && <Avatar src={profileSrc} 
                className={s.avatar}/>}
                {title && <h4>{title}</h4>}
            </div>
            
        </div>
    )
}   
export default Story;