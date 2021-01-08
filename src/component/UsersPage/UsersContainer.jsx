import { connect } from 'react-redux';

import UsersPage from './UsersPage';
import { followAC, unFollowAC, setUsers, getTotalUsersCount, setCurrentPage } from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => { dispatch(followAC(userId)) },
    unfollow: (userId) => { dispatch(unFollowAC(userId)) },
    setUsers: (users) => { dispatch(setUsers(users)) },
    getTotalUsersCount: (totalUsersCount) => { dispatch(getTotalUsersCount(totalUsersCount)) },
    setCurrentPage: (currentPage) => { dispatch(setCurrentPage(currentPage)) },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersContainer;