import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(({ data }) => {
                if (data.resultCode === 0) {
                    const { id, email, login } = data.data;
                    this.props.setUserData(id, email, login);
                }
        })
    };

    render() {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth}/>
       )
   }
};

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);