import { connect } from 'react-redux';
import { compose } from 'redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
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

// compose((mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
// const AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);