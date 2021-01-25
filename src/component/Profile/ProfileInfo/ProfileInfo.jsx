import PreLoader from '../../common/PreLoader';
import ProfileStatusWithHooks from './ProfileStatus';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, updateStatus }) => {
    if (!profile) {
        return <PreLoader />
    };
    
    return (
        <div className={s.descriptionBlok}>
            <img src={profile.photos.large} alt="photos" />
            <ProfileStatusWithHooks updateStatus={updateStatus} />
        </div>
    );
};

export default ProfileInfo;