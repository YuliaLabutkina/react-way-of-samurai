import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
// import s from './Profile.module.css';

const Profile = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} dispatch={dispatch} newPostText={newPostText} />
        </div>
    )
};

export default Profile;