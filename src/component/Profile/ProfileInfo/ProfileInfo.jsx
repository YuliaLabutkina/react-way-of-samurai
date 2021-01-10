import PreLoader from '../../PreLoader';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <PreLoader />
    }
    return (
        <>
            <div>
                <img className={s.img} src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt="" />
            </div>
            <div className={s.descriptionBlok}>
                <img src={profile.photos.large} alt="photos"/>
                ava + description</div>
        </>
    )
}

export default ProfileInfo;