import { reduxForm } from 'redux-form';

import { Input, createField } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';

import s from '../../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email", [required], Input, {type: "text"})}
            {createField("Password", "password", [required], Input, { type: "number" })}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {props?.error && <div className={s.formSummaryError}>{props.error}</div>}
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;