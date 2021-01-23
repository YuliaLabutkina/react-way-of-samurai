import PreLoader from '../../common/PreLoader';
import ProfileStatus from './ProfileStatus';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <PreLoader />
    }
    return (
        <>
            {/* <div>
                <img className={s.img} src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt="" />
            </div> */}
            <div className={s.descriptionBlok}>
                <img src={profile.photos.large} alt="photos"/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </>
    )
}

export default ProfileInfo;