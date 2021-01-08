import React from 'react';
import axios from 'axios';
import User from './User';
import s from './UserPage.module.css';

class UsersPage extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.getTotalUsersCount(data.totalCount);
        })
    };

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => this.props.setUsers(data.items));

    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <>
                <div>
                    {pages.map(page => <span key={page} onClick={() => this.onPageChanged(page)} className = { this.props.currentPage === page ? s.selectedPage : null }>{page}</span>)}
                </div>
                <ul>
                   {this.props.users.length !== 0 && this.props.users.map(user => <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />)}
                </ul>
            </>
        )
    };
};

export default UsersPage;