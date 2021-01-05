import React from 'react';
import Post from './Post';
import s from './MyPosts.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const MyPosts = ({ posts, newPostText, dispatch }) => {
    const newPostElement = React.createRef();

    const addPosts = () => {
        dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
                <button onClick={addPosts}>Add post</button>
            </div>
            <ul>
                {posts.map(({ message, id, likesCount }) => <Post key={id} message={message} likesCount={likesCount} />)}
            </ul>
        </div>
    )
};

export default MyPosts;