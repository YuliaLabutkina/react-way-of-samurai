import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profile-reducer';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts: (profileAddNewPostForm) => { dispatch(addPostActionCreator(profileAddNewPostForm))},
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;