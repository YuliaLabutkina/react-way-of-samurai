import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = ({ login, isAuth, logout }) => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_4PhO9fy33g3JCkyIKuLgeuedliEM9UGLQ&usqp=CAU" alt="" />
        
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login}<button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;