import React from 'react';
import s from './Post.module.css';
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function Post({ message, username, img, timestamp, profilePic }){
    
    return (
        <div className={s.container}>
            <div className={s.container_avatar}>
                <Avatar src={profilePic}/>
                <div className={s.container_name_date}>
                    <p className={s.name}>{username}</p>
                    <p className={s.date}>
                      {new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>  
            </div>
            <div className={s.container_user_post}>
                <p>{message}</p>
            </div>
            <div className={s.container_img}>
                
                <img src={img} alt=""/>
            </div>
            <div>
                {/* Aqui iria el titulo de la publicacion o titulo de la imagen */}
            </div>
            <div>
                {/* Aqui va los likes y comentarios q tiene la publicacion */}
            </div>
            <div className={s.container_Icons}>
                <div className={s.icons}>
                    <ThumbUpAltIcon 
                    fontSize="small" 
                    className={s.marginIcon}
                    />
                    <h4>Like</h4>
                </div>
                <div className={s.icons}>
                    <ChatBubbleOutlineIcon 
                    fontSize="small"
                    className={s.marginIcon}
                    />
                    <h4>Comment</h4>
                </div>
                <div className={s.icons}>
                    <ShareIcon 
                    fontSize="small"
                    className={s.marginIcon}
                    />
                    <h4>Share</h4>
                </div>
            </div>
        </div>
    )
}
export default Post;