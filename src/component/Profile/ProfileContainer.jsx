import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props?.match?.params?.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(({ data }) => {
                this.props.setUserProfile(data);
        })
    }
    render() {
        return (
            <Profile profile={this.props.profile}/>
       )
   }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);