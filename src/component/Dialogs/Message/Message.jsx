import s from './Message.module.css';

const Message = ({ message }) => {
    return (
        <li className={s.itemsMessage}>{message}</li>
    )
};

export default Message;