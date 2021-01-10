import { NavLink } from 'react-router-dom';
import FriendsNav from '../FriendsNav';
import s from './NavBar.module.css';

const NavBar = ({friends}) => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                <li className={s.item}><NavLink to="/friends" activeClassName={s.active}><FriendsNav friends={friends}/></NavLink></li>
            </ul>
        </nav>
    )
};

export default NavBar;