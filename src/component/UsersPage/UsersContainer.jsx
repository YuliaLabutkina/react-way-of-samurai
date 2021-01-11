import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setCurrentPage, toggleFollowingProgress, getUser, follow, unfollow } from '../../redux/users-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import UsersPage from './UsersPage';
import PreLoader from '../PreLoader';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUser(pageNumber, this.props.pageSize);
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

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});

export default compose(
    connect(mapStateToProps,
    {
        setCurrentPage,
        toggleFollowingProgress,
        getUser,
        follow,
        unfollow
    }),
    withAuthRedirect)(UsersApiComponent);