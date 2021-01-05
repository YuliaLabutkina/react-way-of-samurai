import Friend from './Friend';
import s from './FriendsNav.module.css';

const FriendsNav = ({friends}) => {
    return (
        <>
            <h3 className={s.title}>Friends</h3>
            <ul className={s.list}>
                {friends.map(({name, id}) => <Friend key={id} name={name}/>)}
            </ul>
        </>
    )
}

export default FriendsNav;