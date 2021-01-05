import s from './Friend.module.css';

const Friend = ({name}) => {
    return (
        <li className={s.item}>
          <div className={s.itemAvatar}/>
          <p className={s.itemName}>{name}</p>
        </li>
    )
};

export default Friend;