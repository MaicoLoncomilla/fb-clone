import React, { useEffect, useState } from 'react';
import s from './Main.module.css';
import Pages from './pages/Pages';
import YourMind from './send message/YourMind';
import Post from './post/Post';
import db from '../firebase/firebase'
import { useStateValue } from '../firebase/StateProvider';

function Main(){
    const [{ create_post }] = useStateValue();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot( snapshot => setPosts(snapshot.docs.map( doc => ({id: doc.id, data: doc.data()}))))
    }, []);
    return(
        //solucionar esto...........
        <>
            {
                !create_post ?
                    <div className={s.container_main}>
                        <Pages />
                        <YourMind />

                        {posts.map(post => (
                            <Post
                                key={post.data.id}
                                profilePic={post.data.profilePic}
                                message={post.data.message}
                                timestamp={post.data.timestamp}
                                username={post.data.username}
                                img={post.data.image}
                            />
                        ))}

                    </div>
                    :
                    <div className={s.container_main_2}>
                        <Pages />
                        <YourMind />

                        {posts.map(post2 => (
                            <Post
                                key={post2.data.id}
                                profilePic={post2.data.profilePic}
                                message={post2.data.message}
                                timestamp={post2.data.timestamp}
                                username={post2.data.username}
                                img={post2.data.image}
                            />
                        ))}

                    </div>

            }


        </>
    )
}
export default Main;