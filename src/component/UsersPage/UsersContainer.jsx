import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setCurrentPage, toggleFollowingProgress, requestUser, follow, unfollow } from '../../redux/users-reducer';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import UsersPage from './UsersPage';
import PreLoader from '../common/PreLoader';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.requestUser(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUser(pageNumber, this.props.pageSize);
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
                />
            </>
        )
    };
};

// const mapStateToProps = (state) => ({
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
// });

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

export default compose(
    connect(mapStateToProps,
    {
        setCurrentPage,
        toggleFollowingProgress,
        requestUser,
        follow,
        unfollow
    }))(UsersApiComponent);