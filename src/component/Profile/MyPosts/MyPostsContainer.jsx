import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => { dispatch(updateNewPostTextActionCreator(text))},
        addPosts: () => { dispatch(addPostActionCreator())},
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;