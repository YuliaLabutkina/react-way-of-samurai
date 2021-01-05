import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = ({ name, id }) => {
    return (
        <li className={s.items + ' ' + s.active}><NavLink to={"/dialogs/" + id}>{name}</NavLink></li>
    )
};

export default DialogItem;