import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../redux/auth-reducer';
import LoginReduxForm from './LoginForm';

const LoginPage = (props) => {
    const onSubmit = ({ email, password, rememberMe }) => {
        props.login(email, password, rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    };

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(LoginPage);