import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name="login" placeholder="Login" component="input"/>
            </div>
            <div>
                <Field type="number" name="password" placeholder="Password" component="input"/>
            </div>
            <Field type="checkbox" name="rememberMe" component="input"/>remember me
            <button>Login</button>
        </form>
    );

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;