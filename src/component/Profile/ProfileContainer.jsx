import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props?.match?.params?.userId;
        if (!userId) {
            userId = 2;
        };
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    };

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect)(ProfileContainer);