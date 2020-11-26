import React from 'react';
import s from './YourMind.module.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../firebase/StateProvider';
import { CREATE_POST } from '../../firebase/actions';
import CreatePost from '../../create post/CreatePost'

function YourMind(){

    const [ { user }] = useStateValue();
    const [ post, setPost ] = useStateValue();

    const toggle = e => {
        e.preventDefault();
        setPost({
            type: CREATE_POST,
            create_post: true
        })
    }

    return(
        <>
            <div className={s.containerYourMind}>

                <div className={s.containerTop}>
                    <Avatar src={user.photoURL} />
                    <input
                        placeholder={`What's on your mind?, ${user.displayName}`}
                        className={s.inputMind} onClick={toggle} />
                </div>
                <div className={s.containerBottom}>
                    <div className={s.containerBottomChild}>
                        <VideocamIcon style={{ color: "red" }} />
                        <h4>Live Video</h4>
                    </div>
                    <div className={s.containerBottomChild}>
                        <PhotoLibraryIcon style={{ color: "green" }} />
                        <h4>Photo/Video</h4>
                    </div>
                    <div className={s.containerBottomChild}>
                        <InsertEmoticonIcon style={{ color: "orange" }} />
                        <h4>Feeling/Activity</h4>
                    </div>
                </div>
            </div>
            {
                post.create_post &&
                <div className={s.message}>
                    <CreatePost />
                </div>
            }
        </>
    )
}
export default YourMind;