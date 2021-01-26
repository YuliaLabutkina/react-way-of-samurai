import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { requestUser} from '../../redux/users-reducer';
import { getPageSize, getCurrentPage, getIsFetching } from '../../redux/users-selectors';
import UsersPage from './UsersPage';
import PreLoader from '../common/PreLoader';

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.requestUser(this.props.currentPage, this.props.pageSize);
    };

    render() {
        return (
            <>
              {this.props.isFetching ? <PreLoader/> : null}
              <UsersPage/>
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
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
});

export default compose(connect(mapStateToProps, {requestUser}))(UsersApiComponent);