import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { follow, unfollow } from '../../../redux/users-reducer';
import { getFollowingInProgress } from '../../../redux/users-selectors';
import defaultImg from '../../../img/user-male.png';

import s from './Users.module.css';

const User= ({ user }) => {
    const dispatch = useDispatch();
    const followingInProgress = useSelector(getFollowingInProgress);
    const { id, followed, photos, name, status } = user;

    const followFromUser = (id) => {
        dispatch(follow(id));
    };

    const unfollowFromUser = (id) => {
        dispatch(unfollow(id));
    };

    return (
        <li className={s.listItem}>
            <div className={s.photoBlok}>
                <NavLink to={"/profile/" + id}>
                    <img src={photos.small !== null ? photos.small : defaultImg} alt='photo' className={s.userPhoto}/>
                </NavLink>
                {followed
                    ? <button className={s.button} disabled={followingInProgress.some(idUser => idUser === id)} onClick={() => unfollowFromUser(id)}>'UPFOLLOW'</button>
                    : <button className={s.button} disabled={followingInProgress.some(idUser => idUser === id)} onClick={() => followFromUser(id)}>'FOLLOW'</button>
                }
            </div>
            <div>
                <div className={s.userName}>{name}</div>
                <div>{status}</div>
            </div>
        </li>
    );
};

export default User;