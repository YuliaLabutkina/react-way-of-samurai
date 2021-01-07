import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
// import s from './Profile.module.css';

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={posts} dispatch={dispatch} newPostText={newPostText} />
        </div>
    )
};

export default Profile;