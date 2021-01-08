import { connect } from 'react-redux';

import UsersPage from './UsersPage';
import { followAC, unFollowAC, setUsers } from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unFollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsers(users)) },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersContainer;