import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_4PhO9fy33g3JCkyIKuLgeuedliEM9UGLQ&usqp=CAU" alt=""/>
        </header>
    )
}

export default Header;