import React from 'react';
import { connect } from 'react-redux';

import { follow, unfollow, setUsers, getTotalUsersCount, setCurrentPage, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reducer';
import UsersPage from './UsersPage';
import PreLoader from '../PreLoader';
import {usersAPI} from '../../api/api';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.getTotalUsersCount(data.totalCount);
            this.props.toggleIsFetching(false);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <PreLoader/> : null}
              <UsersPage
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </>
        )
    };
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, getTotalUsersCount, setCurrentPage, toggleIsFetching, toggleFollowingProgress})(UsersApiComponent);

export default UsersContainer;