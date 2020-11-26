import React, { useState } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import Picker from 'emoji-picker-react';
import s from './CreatePost.module.css';
import { useStateValue } from '../firebase/StateProvider';
import db from '../firebase/firebase';
import firebase from 'firebase';
import { CREATE_POST } from '../firebase/actions';

function CreatePost() {

  const [post, setPost] = useStateValue();
  const [content, setContent] = useState("");
  const [buttonCloseImg, setButtonCloseImg] = useState(false);
  const [togglePicker, setTogglePicker] = useState(false);
  const [{ user }] = useStateValue();
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('posts').add({
      profilePic: user.photoURL,
      username: user.displayName,
      message: content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      image: imageURL,
    })
    setContent("");
    setPost({
      type: CREATE_POST,
      create_post: false
    })
  }
  const toggleEmoji = e => {
    e.preventDefault();
    setTogglePicker(!togglePicker);
  }
  const handleClick = (e, emojiObject) => {
    e.preventDefault();
    setContent(`${content}${emojiObject.emoji}`)
  }
  const selectImg = e => {
    let input = document.getElementById("file")
    let fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = event => {
      let img = document.getElementById("img_file");
      img.src = event.target.result;
      setImageURL(img.src)
    }
    e.preventDefault();
    setButtonCloseImg(!buttonCloseImg);

  }
  const closeImg = e => {
    e.preventDefault();
    let img = document.getElementById("img_file");
    img.src = ""
    setImageURL(img.src)
    setButtonCloseImg(!buttonCloseImg);
  }

  const toggle = e => {
    e.preventDefault();
    setPost({
      type: CREATE_POST,
      create_post: false
    })

  }
  return (
    <div className={s.container}>
      <div className={s.containerTop}>
        <h2>Create Post</h2>
        <button onClick={toggle} className={s.buttonX}>x</button>
      </div>
      <div className={s.containerAvatarTittle}>
        <Avatar src={user.photoURL} />
        <div className={s.nombre}>
          <h3>{user.displayName}</h3>
          <select className={s.select}>
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
      </div>
      <div className={s.container_img_textarea}>
        <div className={s.divTextArea}>
          <textarea
            className={s.textarea}
            placeholder="What's on your mind?"
            autoFocus
            id="areaEmojis"
            value={content}
            onChange={e => { setContent(e.target.value) }}
          >
          </textarea>
          <div className={s.buttonEmoji}>
            <div className={s.buttonSmilePicker}>
              <InsertEmoticonIcon onClick={toggleEmoji} />
            </div>
          </div>
        </div>
        <div className={s.container_img_post}>
          <div className={s.container_img}>
            <img id="img_file" src="" alt=""/>
          </div>
          {buttonCloseImg &&
            <button onClick={closeImg} className={s.buttonX_img}>X</button>
          }
        </div>
      </div>
      <div className={s.picker}>
        {togglePicker &&
          <Picker className={s.picker} onEmojiClick={handleClick} />
        }
      </div>
      <div className={s.AddPost}>
        <div>
          <h4>Add to Your Post</h4>
        </div>
        <div>
          <VideoCallIcon
            className={s.iconos} style={{ color: "violet" }} />
          <input
            accept="image/*"
            className={s.input_images}
            type="file"
            id="file"
            onChange={selectImg}
          />
          <label for="file"> <PhotoLibraryIcon
            className={s.iconos} style={{ color: "#0a0" }} />
          </label>
          <PersonIcon
            className={s.iconos} style={{ color: "#2e81f4" }} />
          <InsertEmoticonIcon
            className={s.iconos} style={{ color: "orange" }} />
          <LocationOnIcon
            className={s.iconos} style={{ color: "#f22" }} />
          <MoreHorizIcon
            className={s.iconos} style={{ color: "gray" }} />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}
        className={`${s.buttonPost} ${content !== "" ? s.buttonChange : null}`} >Post</button>
    </div>
  )
}

export default CreatePost;