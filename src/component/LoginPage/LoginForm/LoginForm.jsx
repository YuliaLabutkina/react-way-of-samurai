import { Field, reduxForm } from 'redux-form';

import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

import s from '../../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name="email" placeholder="Email" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="number" name="password" placeholder="Password" component={Input} validate={[required]}/>
            </div>
            <Field type="checkbox" name="rememberMe" component={Input} />remember me
            {props?.error && <div className={s.formSummaryError}>{props.error}</div>}
            <button>Login</button>
        </form>
    );

};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;