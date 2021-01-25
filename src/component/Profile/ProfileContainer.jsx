import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getUserProfile, getStatus } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props?.match?.params?.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) this.props.history.push("/login");
        };
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    };

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);