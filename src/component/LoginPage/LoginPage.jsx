import LoginReduxForm from './LoginForm';

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default LoginPage;