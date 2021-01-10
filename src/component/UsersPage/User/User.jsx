import { NavLink } from 'react-router-dom';
import defaultImg from '../../../img/user-male.png';
import { usersAPI } from '../../../api/api';

const User = ({ user, follow, unfollow, followingInProgress, toggleFollowingProgress }) => {
    const { id, followed, photos, name, status } = user;

    const followFromUser = (id) => {
        toggleFollowingProgress(true, id);

        usersAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                follow(id);
                toggleFollowingProgress(false, id);
            };
        }).catch(e => {
            toggleFollowingProgress(false, id);
        });
    };

    const unfollowFromUser = (id) => {
        toggleFollowingProgress(true, id);
        usersAPI.unFollowUser(id).then(data => {
            if (data.resultCode === 0) {
                unfollow(id);
                toggleFollowingProgress(false, id);
            };
        }).catch(e => {
            toggleFollowingProgress(false, id);
        });
    };

    return (
        <li>
            <div>
                <NavLink to={"/profile/" + id}>
                    <img src={photos.small !== null ? photos.small : defaultImg} alt='photo' />
                </NavLink>
                {followed
                    ? <button disabled={followingInProgress.some(idUser => idUser === id)} onClick={() => unfollowFromUser(id)}>'UPFOLLOW'</button> 
                    : <button disabled={followingInProgress.some(idUser => idUser === id)} onClick={() => followFromUser(id)}>'FOLLOW'</button>
                }
            </div>
            <div>
                <div>{name}</div>
                <div>{status}</div>
            </div>
        </li>
    )
};

export default User;