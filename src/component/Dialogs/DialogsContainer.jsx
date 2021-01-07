import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        users: state.messagesPage.users,
        newMessagesBody: state.messagesPage.newMessagesBody,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (message) => { dispatch(updateNewMessageBodyCreator(message)) },
        sendMessage: () => { dispatch(sendMessageCreator()) },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;