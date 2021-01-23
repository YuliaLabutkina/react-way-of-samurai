import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import Post from './Post';
import s from './MyPosts.module.css';

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);

const MyPosts = ({ posts, addPosts }) => {
    const onAddPosts = ({addNewPost}) => {
        addPosts(addNewPost);
    };

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPosts}/>
            <ul>
                {posts.map(({ message, id, likesCount }) => <Post key={id} message={message} likesCount={likesCount} />)}
            </ul>
        </div>
    )
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="addNewPost" placeholder="Enter your message" validate={[required, maxLength30, minLength2]}/>
            </div>
            <button>Add post</button>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;