import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getStatus } from '../../../../redux/profile-selector';
import { updateStatus } from '../../../../redux/profile-reducer';

import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = () => {
    const dispatch = useDispatch();
    const status = useSelector(getStatus);
    const [editMode, setEditMode] = useState(false);
    const [userStatus, setUserStatus] = useState(status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateStatus(userStatus));
    };

    const onStatusChange = ({ target }) => {
        setUserStatus(target.value);
    };

    useEffect(() => {
        setUserStatus(status);
    }, [status]);

    return (
            <div>
                {!editMode &&
                <div>
                    <span className={s.status}>Status: </span>
                    <span onDoubleClick={activateEditMode}>{userStatus || "---"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <span className={s.status}>Status: </span>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={userStatus}></input>
                </div>
                }
            </div>
        );
};

export default ProfileStatusWithHooks;