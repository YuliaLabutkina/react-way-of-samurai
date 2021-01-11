import { NavLink } from 'react-router-dom';
import defaultImg from '../../../img/user-male.png';

const User = ({ user, followingInProgress, follow, unfollow }) => {
    const { id, followed, photos, name, status } = user;

    const followFromUser = (id) => {
        follow(id);
    };

    const unfollowFromUser = (id) => {
        unfollow(id);
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