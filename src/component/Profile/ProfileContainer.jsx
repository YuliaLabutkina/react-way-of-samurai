import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props?.match?.params?.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    };

    render() {
        return (
            <Profile profile={this.props.profile}/>
       )
    };
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect)(ProfileContainer);