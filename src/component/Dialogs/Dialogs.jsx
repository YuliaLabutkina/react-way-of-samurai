import { Field, reduxForm } from 'redux-form';

import DialogItem from './DialogItem';
import Message from './Message';
import s from './Dialogs.module.css';

const Dialogs = ({ messages, users, sendMessage }) => {

    const addNewMessage = ({newMessageBody}) => {
        sendMessage(newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsUserList}>
                {users.map(({ name, id }) => <DialogItem key={id} name={name} id={id} />)}
            </ul>
            <ul className={s.dialogsMessagesList}>
                {messages.map(({ message, id }) => <Message key={id} message={message} />)}
                <AddMessageFormReduxForm onSubmit={addNewMessage}/>
            </ul>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            <button>Send</button>
        </form>
    );
};

const AddMessageFormReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;