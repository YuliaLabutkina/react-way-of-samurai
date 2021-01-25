import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
// import s from './Profile.module.css';

const Profile = ({ profile }) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;