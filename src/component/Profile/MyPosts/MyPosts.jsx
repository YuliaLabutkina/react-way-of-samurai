import React from 'react';
import Post from './Post';
import s from './MyPosts.module.css';


const MyPosts = ({ posts, newPostText, updateNewPost, addPosts }) => {
    const newPostElement = React.createRef();

    console.log(posts);

    const onAddPosts = () => {
        addPosts();
    };

    const onPostChange = ({ target }) => {
        updateNewPost(target.value);
    };

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange} value={newPostText}/>
                <button onClick={onAddPosts}>Add post</button>
            </div>
            <ul>
                {posts.map(({ message, id, likesCount }) => <Post key={id} message={message} likesCount={likesCount} />)}
            </ul>
        </div>
    )
};

export default MyPosts;