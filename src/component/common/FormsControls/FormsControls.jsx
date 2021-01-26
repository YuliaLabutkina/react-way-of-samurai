import { Field } from 'redux-form';

import s from './FormsControls.module.css';

const FormControl = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={`${s.formControl} ${hasError ? s.error : null}`}>
            <div>
                {children}
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const { input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...restProps} {...input} />
        </FormControl>
    );
};

export const Input = (props) => {
    const { input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...restProps} {...input} />
        </FormControl>
    );
};

export const createField = (placeholder, name, validators, component, props, text = "") => (
    <div>
        <Field name={name} placeholder={placeholder} component={component} validate={validators} {...props} />{text}
    </div>
);