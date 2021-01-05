import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.img} src="https://www.pics4learning.com/images/pics-banner1-1300.jpg" alt="" />
            </div>
            <div className={s.descriptionBlok}>ava + description</div>
        </>
    )
}

export default ProfileInfo;