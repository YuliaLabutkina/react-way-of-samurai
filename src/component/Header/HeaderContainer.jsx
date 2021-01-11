import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { authLogin } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authLogin();
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

export default connect(mapStateToProps, {authLogin})(HeaderContainer);