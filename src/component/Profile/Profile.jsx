import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';
// import s from './Profile.module.css';

const Profile = ({ profile, isOwner }) => {
    return (
        <div>
            <ProfileInfo profile={profile} isOwner={isOwner} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;