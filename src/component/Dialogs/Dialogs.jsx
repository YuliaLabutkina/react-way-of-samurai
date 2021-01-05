import DialogItem from './DialogItem';
import Message from './Message';
import s from './Dialogs.module.css';
import { sendMassageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = ({ messagesPage, dispatch }) => {
    const { messages, users, newMessagesBody } = messagesPage;
    
    const onSendMessageClick = () => {
        dispatch(sendMassageCreator());
    };

    const onNewMessageChange = ({ target }) => {
        dispatch(updateNewMessageBodyCreator(target.value));
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsUserList}>
                {users.map(({ name, id }) => <DialogItem key={id} name={name} id={id} />)}
            </ul>
            <ul className={s.dialogsMessagesList}>
                {messages.map(({ message, id }) => <Message key={id} message={message} />)}
                <textarea placeholder='Enter your message' value={newMessagesBody} onChange={onNewMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </ul>
        </div>
    )
};

export default Dialogs;