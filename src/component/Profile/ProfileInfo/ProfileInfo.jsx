import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

import PreLoader from '../../common/PreLoader';
import ProfileStatusWithHooks from './ProfileStatus';
import { savePhoto } from '../../../redux/profile-reducer';
import defaultImg from '../../../img/user-male.png';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, updateStatus, isOwner }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <PreLoader />
    };

    const onMainPhotoSelected = ({ target }) => {
        if (target.files.length) {
            dispatch(savePhoto(target.files[0]));
        };
    };
    
    return (
        <div className={s.descriptionBlok}>
            <img src={profile.photos.large || defaultImg} alt="photos" className={s.mainPhoto} />
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
            {editMode ? <ProfileDataForm profile={profile}/> : <ProfileData profile={profile}/>}
            <ProfileStatusWithHooks updateStatus={updateStatus} />
        </div>
    );
};

const ProfileData = ({ profile }) => {
    return (
        <div>
            <p><span className={s.boldText}>Full name: </span> {profile.fullName}</p>
            <p><span className={s.boldText}>Looking for a job: </span> {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && <p><span className={s.boldText}>My professional skills: </span> {profile.lookingForAJobDescription}</p>}
            <p><span className={s.boldText}>About me: </span> {profile.aboutMe}</p>
            <p><span className={s.boldText}>Contacts: </span> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}></Contact>
            })}</p>
        </div>
    );
};

const ProfileDataForm = ({ profile }) => {
    return (
        <div>
            <p><span className={s.boldText}>Full name: </span> {profile.fullName}</p>
            <p><span className={s.boldText}>Looking for a job: </span> {profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJob && <p><span className={s.boldText}>My professional skills: </span> {profile.lookingForAJobDescription}</p>}
            <p><span className={s.boldText}>About me: </span> {profile.aboutMe}</p>
            <p><span className={s.boldText}>Contacts: </span> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}></Contact>
            })}</p>
        </div>
    );
};


const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contactsContainer}>
            <p><span className={s.boldText}>{contactTitle}: </span>{contactValue}</p>
        </div>
    );
};

export default ProfileInfo;