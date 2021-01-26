import { useSelector } from 'react-redux';

import { getUsers } from '../../redux/users-selectors';
import User from './User';
import Paginator from './Paginator';
import s from './UsersPage.module.css';

const UsersPage = () => {
    const users = useSelector(getUsers);
    return (
        <>
            <Paginator />
            <ul className={s.usersList} >
                {users.length !== 0 && users.map(user => <User key={user.id} user={user}/>)}
            </ul>
        </>
    );
};

export default UsersPage;