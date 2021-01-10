import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { follow, unfollow, setUsers, getTotalUsersCount, setCurrentPage, toggleIsFetching } from '../../redux/users-reducer';
import UsersPage from './UsersPage';
import PreLoader from '../PreLoader';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => {
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
});

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, getTotalUsersCount, setCurrentPage, toggleIsFetching})(UsersApiComponent);

export default UsersContainer;