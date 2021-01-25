import { useSelector } from 'react-redux';

import Friend from './Friend';
import { getFriends } from '../../redux/selectors-friends';
import s from './FriendsNav.module.css';

const FriendsNav = () => {
    const friends = useSelector(getFriends);
    return (
        <>
            <h3 className={s.title}>Friends</h3>
            <ul className={s.list}>
                {friends.map(({ name, id }) => <Friend key={id} name={name} />)}
            </ul>
        </>
    );
};

export default FriendsNav;