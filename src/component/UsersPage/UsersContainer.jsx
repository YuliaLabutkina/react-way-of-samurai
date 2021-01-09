import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';

import { followAC, unFollowAC, setUsers, getTotalUsersCount, setCurrentPage } from '../../redux/users-reducer';
import UsersPage from './UsersPage';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => this.props.setUsers(data.items));

    };

    render() {
        return (
            <UsersPage
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    };
};

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;